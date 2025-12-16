import {
  createAuthorService,
  deleteAuthorService,
  getAuthorService,
  updateAuthorService,
} from "../service/Author.services.js";

export const createAuthor = async (req, res) => {
  try {
    const author = await createAuthorService(req.body);
    res
      .status(201)
      .json({
        success: true,
        message: "Author create successfully",
        data: author,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAuthors = async (req, res) => {
  try {
    const author = await getAuthorService();
    res.status(200).json({ success: true, data: author });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const author = await getAuthorById(req.params.id);
    if (!author) {
      res.status(404).json({ message: "Author not found" });
    }
    res.status(200).json({ success: true, data: author });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const author = await updateAuthorService(req.params.id, req.body);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.status(200).json({ success: true, data: author });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const author = await deleteAuthorService(req.params.id);
    if (!author) {
      res.status(404).json({ message: "Author not found" });
    }
    res.status(200).json({ success: true, message: "Author deleted." });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
