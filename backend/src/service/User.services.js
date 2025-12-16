import User from "../model/User.model.js";

// create user
export const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};

// get all users
export const getAllUsers = async () => {
  return await User.find().select("-password");
};

// get user by id
export const getUserById = async (id) => {
  return await User.findById(id).select("-password");
};

// update user
export const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};
// delete User
export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
