import Author from "../model/author.model.js";

export const createAuthorService = (data) => {
  return Author.create(data);
};

export const getAuthorService = () => {
  return Author.find();
};

export const getAuthorByIdService = (id) => {
  return Author.findById(id);
};

export const updateAuthorService = (id, data) => {
  return Author.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteAuthorService = (id) => {
  return Author.findByIdAndDelete(id);
};
