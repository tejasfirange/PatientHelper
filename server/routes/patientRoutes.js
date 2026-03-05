const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  registerPatient,
  getPatientProfile,
} = require("../controllers/patientController");

router.post("/register-patient", authMiddleware, registerPatient);
router.get("/me", authMiddleware, getPatientProfile);

module.exports = router;
