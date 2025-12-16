import bcrypt from "bcryptjs";
import User from "../model/User.model.js";
import jwt from "jsonwebtoken";
export const register = async (userData) => {
  const { name, email, password, role } = userData;

  // check is user already user exists
  const existingUser = await User.UserfindOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashPassword,
    role,
  });
  return user;
};

// Login user

export const Login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invaild email and password");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invaild email or password");
  }
  // Generate JWT

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  return { user, token };
};
