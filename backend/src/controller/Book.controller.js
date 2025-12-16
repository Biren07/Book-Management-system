import {
  createBookService,
  deleteBookservices,
  getBookbyIdServices,
  getBooksService,
  updateBooksServices,
} from "../service/Book.services.js";

export const createBook = async (req, res) => {
  try {
    const book = await createBookService(req.body);
    res.status(201).json({ success: true, data: book });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get all books

export const getBooks = async (req, res) => {
  try {
    const books = await getBooksService();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get book by id

export const getBookById = async (req, res) => {
  try {
    const book = await getBookbyIdServices(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book is not found" });
    }
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update the book
export const updateBook = async (req, res) => {
  try {
    const book = await updateBooksServices(req.params.id, req.body);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE
export const deleteBook = async (req, res) => {
  try {
    const book = await deleteBookservices(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ success: true, message: "Book deleted" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
