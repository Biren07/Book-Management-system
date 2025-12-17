import express from "express";
import {
  createAuthor,
  deleteAuthor,
  getAuthorById,
  getAuthors,
  updateAuthor,
} from "../controller/Author.controller.js";
import { protect, authorize } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/authors", protect, authorize("Admin", "Librarian"), createAuthor);
router.get("/authors", protect, getAuthors);
router.get("/authors/:id", protect, getAuthorById);
router.put("/authors/:id", protect, authorize("Admin", "Librarian"), updateAuthor);
router.delete("/authors/:id", protect, authorize("Admin", "Librarian"), deleteAuthor);

export default router;
