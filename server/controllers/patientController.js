const pool = require("../config/db");

const registerPatient = async (req, res) => {
  try {
    const { name, dob, gender, contact_no } = req.body;
    const email = req.user?.email || req.body.email;

    if (!email || !name) {
      return res.status(400).json({ message: "email and name are required" });
    }

    const query = `
        INSERT INTO patient_details
        (email, name, dob, gender, contact_no)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *
    `;

    const result = await pool.query(query, [
      email,
      name,
      dob,
      gender,
      contact_no,
    ]);

    res.json({
      message: "Patient registered successfully",
      patient: result.rows[0],
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getPatientProfile = async (req, res) => {
  try {
    const email = req.user?.email || req.query.email;
    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }

    const result = await pool.query(
      "SELECT id, email, name, dob, gender, contact_no FROM patient_details WHERE email=$1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Patient profile not found" });
    }

    return res.json({ patient: result.rows[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { registerPatient, getPatientProfile };
