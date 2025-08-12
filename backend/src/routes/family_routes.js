import express from "express";
import { createFamily, inviteFamilyMember, acceptInvitation, getMyFamilies } from "../controller/family_controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createFamily); // Create a new family
router.post("/:familyId/invite", auth, inviteFamilyMember); // Invite member
router.post("/:familyId/accept", auth, acceptInvitation); // Accept invitation
router.get("/my-families", auth, getMyFamilies); // Get logged-in user's families

export default router;
