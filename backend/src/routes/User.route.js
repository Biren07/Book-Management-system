import e from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  registerUser,
  updateUser,
} from "../controller/User.controller.js";

const router = e.Router();

router.post("/register", registerUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
