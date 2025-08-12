// controllers/mood_controller.js
import MoodLog from '../models/Moodlog.js';

// Create mood log
export const createMoodLog = async (req, res) => {
  try {
    const newLog = new MoodLog(req.body);
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create mood log' });
  }
};

// Get mood logs by patient ID
export const getMoodLogs = async (req, res) => {
  try {
    const logs = await MoodLog.find({ patientId: req.params.patientId });
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mood logs' });
  }
};

// Delete a mood log
export const deleteMoodLog = async (req, res) => {
  try {
    await MoodLog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Mood log deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete mood log' });
  }
};
