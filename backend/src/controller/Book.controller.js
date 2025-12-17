import {
  createBookService,
  deleteBookService,
  getBookByIdService,
  getBooksService,
  updateBookService,
} from "../service/Book.services.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";

// create book
export const createBook = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      imageUrl = await uploadToCloudinary(
        req.file.path,
        "book-system/books"
      );
    }

    const book = await createBookService({
      ...req.body,
      image: imageUrl,
    });

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get all book
export const getBooks = async (req, res) => {
  try {
    const books = await getBooksService();

    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get book by id 
export const getBookById = async (req, res) => {
  try {
    const book = await getBookByIdService(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid book ID",
    });
  }
};

// Update the book
export const updateBook = async (req, res) => {
  try {
    let updatedData = { ...req.body };

    if (req.file) {
      const imageUrl = await uploadToCloudinary(
        req.file.path,
        "book-system/books"
      );
      updatedData.image = imageUrl;
    }

    const book = await updateBookService(req.params.id, updatedData);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete book
export const deleteBook = async (req, res) => {
  try {
    const book = await deleteBookService(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid book ID",
    });
  }
};
