const express = require("express");
const router = express.Router();
const { registerPatient,getPatientByEmail,getPatientById} = require("../controllers/patientController");


router.post("/register-patient", registerPatient);
router.get("/email/:email", getPatientByEmail);
router.get("/:id", getPatientById);

module.exports = router;