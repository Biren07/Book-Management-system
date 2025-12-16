import express from "express";
import {
  createAuthor,
  deleteAuthor,
  getAuthorById,
  getAuthors,
  updateAuthor,
} from "../controller/Author.controller.js";

const router = express.Router();

router.post("/authors", createAuthor);
router.get("/authors", getAuthors);
router.get("/authors/:id", getAuthorById);
router.put("/authors/:id", updateAuthor);
router.delete("/authors/:id", deleteAuthor);

export default router;
