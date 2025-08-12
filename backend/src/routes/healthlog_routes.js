// routes/healthlog_routes.js
import express from 'express';
import {
  createHealthLog,
  getHealthLogs,
  deleteHealthLog
} from '../controller/health_controller.js';

const router = express.Router();

// Create new health log
router.post('/', createHealthLog);

// Get logs by patient ID
router.get('/:patientId', getHealthLogs);

// Delete a log by ID
router.delete('/:id', deleteHealthLog);

export default router;
