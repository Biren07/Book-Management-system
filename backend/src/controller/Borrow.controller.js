import {
  borrowBookService,
  returnBookService,
} from "../service/Borrow.services.js";

export const borrowBook = async (req, res) => {
  try {
    const { bookId, dueDate } = req.body;
    const borrow = await borrowBookService(req.user.id, bookId, dueDate);
    res.status(201).json({ succes: true, data: borrow });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
export const returnBook = async (req, res) => {
  try {
    const borrow = await returnBookService(req.params.id);
    res.status(200).json({ success: true, data: borrow });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
