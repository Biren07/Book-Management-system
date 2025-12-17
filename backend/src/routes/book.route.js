import express from "express";
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controller/Book.controller.js";
import { protect, authorize } from "../middlewares/auth.middleware.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/books", protect, authorize("Admin", "Librarian"), upload.single("image"), createBook);
router.get("/books", protect, getBooks);
router.get("/books/:id", protect, getBookById);
router.put("/books/:id", protect, authorize("Admin", "Librarian"), upload.single("image"), updateBook);
router.delete("/books/:id", protect, authorize("Admin", "Librarian"), deleteBook);

export default router;
