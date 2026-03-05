function evaluateRisk(totalScore, redFlagTriggered) {
  if (redFlagTriggered) {
    return {
      riskLevel: 'critical',
      recommendation: 'Immediate medical attention recommended.',
    };
  }

  if (totalScore >= 28) {
    return {
      riskLevel: 'high',
      recommendation: 'Consult a doctor as soon as possible.',
    };
  }

  if (totalScore >= 16) {
    return {
      riskLevel: 'moderate',
      recommendation: 'Monitor symptoms and seek medical advice if worsening.',
    };
  }

  return {
    riskLevel: 'low',
    recommendation: 'Home care is likely sufficient unless symptoms change.',
  };
}

module.exports = { evaluateRisk };
