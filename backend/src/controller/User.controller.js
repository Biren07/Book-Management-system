import {
  createUser,
  getAllUsers,
  getUserById,
} from "../service/User.services.js";

// create User
export const registerUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res
      .status(201)
      .json({
        success: true,
        message: "User successfully created.",
        data: user,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get all Users

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get user by Id
export const getUser = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};

//  update users

export const updateUser = async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.status(200).json({ message: "user is deleted successfully." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
