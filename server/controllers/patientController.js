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

module.exports = { registerPatient };