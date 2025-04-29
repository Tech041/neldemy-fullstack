import bcrypt from "bcryptjs";
import User from "../models/userAuth.js";
import createToken from "../utils/createToken.js";

// Register user
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Req.body", req.body);
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing credential" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = createToken(newUser._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      newUser,
      message: "Registration successful",
    });
  } catch (error) {
    console.log("Error registering user", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Incomplete credentials" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordVerified = bcrypt.compare(password, user.password);
    if (!isPasswordVerified) {
      return res.status(400).json({ message: "Password is incorrect" });
    }
    const token = createToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });
    return res
      .status(200)
      .json({ success: true, user, message: "Login successful" });
  } catch (error) {
    console.log("Error logging in  user", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
export const logout = (req, res) => {
  try {
    res.clearCookie("token");
    return res
      .status(200)
      .json({ success: true, message: "Logout successful" });
  } catch (error) {
    console.log("Error logging out", error.message);
  }
};
