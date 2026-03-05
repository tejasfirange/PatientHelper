const { getStartQuestion, evaluateAssessment } = require('../services/triageEngine');

function getInitialQuestion(req, res) {
  try {
    const { category } = req.query;
    if (!category) {
      return res.status(400).json({ message: 'category query param is required' });
    }

    const data = getStartQuestion(category);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

function submitAssessment(req, res) {
  try {
    const { category, answers } = req.body;
    if (!category) {
      return res.status(400).json({ message: 'category is required' });
    }
    if (!Array.isArray(answers)) {
      return res.status(400).json({ message: 'answers must be an array' });
    }

    const result = evaluateAssessment(category, answers);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getInitialQuestion,
  submitAssessment,
};
