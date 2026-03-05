const express = require('express');
const {
  getInitialQuestion,
  submitAssessment,
} = require('../controllers/assessmentController');

const router = express.Router();

router.get('/start', getInitialQuestion);
router.post('/evaluate', submitAssessment);

module.exports = router;
