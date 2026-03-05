const fs = require('fs');
const path = require('path');
const { evaluateRisk } = require('../utils/riskEvaluator');

const TRIAGE_DIR = path.join(__dirname, '..', 'triage-data');

function readJsonFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8').trim();
  if (!raw) {
    return {};
  }
  return JSON.parse(raw);
}

function normalizeCategories(payload) {
  if (Array.isArray(payload?.categories)) {
    return payload.categories;
  }
  if (payload?.category && payload?.questions) {
    return [payload];
  }
  return [];
}

function loadCategoryMap() {
  const categoryMap = new Map();
  const files = fs
    .readdirSync(TRIAGE_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'));

  for (const file of files) {
    const filePath = path.join(TRIAGE_DIR, file.name);
    const payload = readJsonFile(filePath);
    const categories = normalizeCategories(payload);

    for (const categoryFlow of categories) {
      if (!categoryFlow?.category || !categoryFlow?.startQuestion || !categoryFlow?.questions) {
        continue;
      }
      categoryMap.set(String(categoryFlow.category).toLowerCase(), categoryFlow);
    }
  }

  return categoryMap;
}

function getCategoryFlow(category) {
  const categoryMap = loadCategoryMap();
  const flow = categoryMap.get(String(category || '').toLowerCase());
  if (!flow) {
    throw new Error(`Category '${category}' not found in triage data`);
  }
  return flow;
}

function getQuestionById(flow, questionId) {
  const question = flow.questions?.[questionId];
  if (!question) {
    throw new Error(`Question '${questionId}' not found for category '${flow.category}'`);
  }
  return question;
}

function getStartQuestion(category) {
  const flow = getCategoryFlow(category);
  const startId = flow.startQuestion;
  const startQuestion = getQuestionById(flow, startId);

  return {
    category: flow.category,
    questionId: startId,
    question: startQuestion,
  };
}

function evaluateAssessment(category, answers) {
  const flow = getCategoryFlow(category);
  let currentQuestionId = flow.startQuestion;
  let totalScore = 0;
  let redFlagTriggered = false;
  let answeredCount = 0;

  for (const answer of answers || []) {
    if (currentQuestionId === 'end') {
      break;
    }

    const expectedQuestionId = String(answer?.questionId || '');
    if (expectedQuestionId !== currentQuestionId) {
      throw new Error(
        `Invalid answer order. Expected '${currentQuestionId}', received '${expectedQuestionId}'`
      );
    }

    const question = getQuestionById(flow, currentQuestionId);
    const optionIndex = Number(answer.optionIndex);
    const selectedOption = question.options?.[optionIndex];
    if (!selectedOption) {
      throw new Error(`Invalid option index '${answer.optionIndex}' for question '${currentQuestionId}'`);
    }

    totalScore += Number(selectedOption.score || 0);
    redFlagTriggered = redFlagTriggered || Boolean(selectedOption.redFlag);
    currentQuestionId = selectedOption.next || 'end';
    answeredCount += 1;

    if (redFlagTriggered) {
      currentQuestionId = 'end';
      break;
    }
  }

  if (currentQuestionId !== 'end' && !redFlagTriggered) {
    return {
      completed: false,
      category: flow.category,
      totalScore,
      answeredCount,
      nextQuestionId: currentQuestionId,
      nextQuestion: getQuestionById(flow, currentQuestionId),
    };
  }

  const { riskLevel, recommendation } = evaluateRisk(totalScore, redFlagTriggered);
  return {
    completed: true,
    category: flow.category,
    totalScore,
    redFlagTriggered,
    riskLevel,
    recommendation,
    answeredCount,
  };
}

module.exports = {
  getStartQuestion,
  evaluateAssessment,
};
