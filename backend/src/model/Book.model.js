import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      trim: true,
    },
    isbnNumber: {
      type: String,
      required: true,
      unique: true,
    },
    authorName: {
      type: String,
      required: true,
      trim: true,
    },
    bookPrice: {
      type: Number,
      required: true,
    },
    publishedAt: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
