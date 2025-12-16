import Book from "../model/Book.model.js";

// create book
export const createBookService = async (data) => {
  return await Book.create(data);
};

// get all books
export const getBooksService = async () => {
  return await Book.find();
};
// get book by Id
export const getBookbyIdServices = async (id) => {
  return await Book.findById();
};

// update book

export const updateBooksServices = async (id, data) => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};

// delete book
export const deleteBookservices = async (id) => {
  return await Book.findByIdAndDelete(id);
};
