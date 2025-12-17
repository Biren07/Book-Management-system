import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  registerUser,
  updateUser,
} from "../controller/User.controller.js";
import { protect, authorize } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/register", upload.single("profileImage"), registerUser);
router.get("/", protect, authorize("Admin"), getUsers);
router.get("/:id", protect, authorize("Admin"), getUser);
router.put("/:id", protect, authorize("Admin"), upload.single("profileImage"), updateUser);
router.delete("/:id", protect, authorize("Admin"), deleteUser);

export default router;
