// routes/moodlog_routes.js
import express from 'express';
import {
  createMoodLog,
  getMoodLogs,
  deleteMoodLog
} from '../controller/mood_controller.js';


const router = express.Router();

// POST: Add new mood log
router.post('/', createMoodLog);

// GET: Fetch mood logs by patientId
router.get('/:patientId', getMoodLogs);

// DELETE: Remove mood log by its ID
router.delete('/:id', deleteMoodLog);

export default router;
