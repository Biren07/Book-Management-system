import mongoose, { mongo } from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
    },
    nationality: {
      type: String,
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", authorSchema);
export default Author;
