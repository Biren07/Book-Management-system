import express from "express";
import { borrowBook, returnBook } from "../controller/Borrow.controller.js";
import { protect, authorize } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/borrow", protect, authorize("User"), borrowBook);
router.put("/return/:id", protect, authorize("Admin", "Librarian"), returnBook);

export default router;
