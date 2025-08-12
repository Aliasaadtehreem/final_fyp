import Patient from "../models/Patient.js";
import generateToken from "../utils/generatetoken.js";

// @desc    Login patient
// @route   POST /api/patients/login
// @access  Public
export const loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await patient.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({
      _id: patient._id,
      email: patient.email,
      token: generateToken(patient._id)
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
