// controllers/health_controller.js
import HealthLog from '../models/Healthlog.js';

// Add a new health log
export const createHealthLog = async (req, res) => {
  try {
    const newLog = new HealthLog(req.body);
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create health log' });
  }
};

// Get all health logs for a patient
export const getHealthLogs = async (req, res) => {
  try {
    const logs = await HealthLog.find({ patientId: req.params.patientId });
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch health logs' });
  }
};

// Delete a health log
export const deleteHealthLog = async (req, res) => {
  try {
    await HealthLog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Health log deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete health log' });
  }
};
