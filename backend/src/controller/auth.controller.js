import { Login, register } from "../service/Auth.services.js";

export const registerUser = async (req, res) => {
  try {
    const user = await register(req.body);
    res
      .status(201)
      .json({
        success: true,
        message: "User registered successfully.",
        data: user,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await Login(email, password);
    res.status(200).json({
      success: true,
      message: "Login successfully.",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
