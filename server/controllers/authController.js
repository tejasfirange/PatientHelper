const pool = require("../config/db");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = CryptoJS.SHA256(password).toString();

    const query = `
        INSERT INTO users (email, role, password)
        VALUES ($1, $2, $3)
        RETURNING email
    `;

    const result = await pool.query(query, [
      email,
      "patient",
      hashedPassword,
    ]);

    res.json({
      message: "User created",
      email: result.rows[0].email,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user
    const user = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const dbUser = user.rows[0];

    // hash entered password
    const hashedPassword = CryptoJS.SHA256(password).toString();

    if (hashedPassword !== dbUser.password) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    // create token
    const token = jwt.sign(
      {
        email: dbUser.email,
        role: dbUser.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = { createUser, loginUser };