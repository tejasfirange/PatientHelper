const express = require("express");
const router = express.Router();
const { registerPatient } = require("../controllers/patientController");


router.post("/register-patient", registerPatient);

module.exports = router;