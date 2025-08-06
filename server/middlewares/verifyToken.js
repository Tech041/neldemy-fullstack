import jwt from "jsonwebtoken";

const verifyAccessToken = (req, res, next) => {
  const token = req.cookies?.access_token;
  if (!token) return res.status(401).json({ message: "Access token missing" });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(403).json({ message: "Access token expired or invalid" });
  }
};

export default verifyAccessToken;
