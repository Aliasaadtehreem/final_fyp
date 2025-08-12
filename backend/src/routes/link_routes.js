import express from "express";
import {
  createLink,
  getAllLinks,
  getLinkById,
  deleteLink
} from "../controller/link_controller.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// Protected routes — require authentication
router.post("/", authMiddleware, createLink);
router.get("/", authMiddleware, getAllLinks);
router.get("/:id", authMiddleware, getLinkById);
router.delete("/:id", authMiddleware, deleteLink);

export default router;
