const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/patient", patientRoutes);

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'MediConnect backend is running'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});