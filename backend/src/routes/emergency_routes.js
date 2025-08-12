// src/routes/emergency_routes.js
import express from "express";
import { sendEmergencyAlert } from "../controller/emergency_controller.js";


const router = express.Router();

// @route POST /api/emergency
router.post("/", sendEmergencyAlert);

export default router;
