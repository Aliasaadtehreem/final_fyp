// src/controllers/emergency_controller.js
import EmergencyModel from "../models/Emergencyalert.js";
// import User from '../models/User.js';
 // optional if you need to notify family

// @desc  Handle Emergency Alert
// @route POST /api/emergency
export const sendEmergencyAlert = async (req, res) => {
  try {
    const { patientId, location, message } = req.body;

    if (!patientId || !location) {
      return res.status(400).json({ error: "Patient ID and location are required." });
    }

    // Save emergency alert
    const alert = new EmergencyModel({
      patient: patientId,
      location,
      message,
      timestamp: Date.now(),
    });

    await alert.save();

    // TODO: Notify family members if implemented
    // Example: Fetch family members, send push/email/SMS

    res.status(201).json({ message: "Emergency alert sent successfully.", alert });
  } catch (error) {
    console.error("Emergency Alert Error:", error);
    res.status(500).json({ error: "Failed to send emergency alert." });
  }
};
