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
export const updateUserServices= async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};
//upadte UserImageProfile
export const updateUserProfileImage = async (id, imageUrl) => {
  return await User.findByIdAndUpdate(
    id,
    { profileImage: imageUrl },
    {
      new: true,
      select: "-password",
    }
  );
};
// delete User
export const deleteUserServices= async (id) => {
  return await User.findByIdAndDelete(id);
};
