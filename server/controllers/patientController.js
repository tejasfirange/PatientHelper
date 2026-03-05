const pool = require("../config/db");

const registerPatient = async (req, res) => {
  try {
    const { email, name, dob, gender, contact_no } = req.body;

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


// Get patient by email
const getPatientByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const result = await pool.query(
      "SELECT * FROM patient_details WHERE email=$1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Patient not found"
      });
    }

    res.json(result.rows[0]);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


// Get patient by id
const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM patient_details WHERE id=$1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Patient not found"
      });
    }

    res.json(result.rows[0]);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


module.exports = { registerPatient , getPatientByEmail, getPatientById };