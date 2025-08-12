import express from "express";
import { googleLogin } from "../controller/googleauth.js";

const router = express.Router();

router.post("/google", googleLogin);

export default router;
