import jwt from "jsonwebtoken";

export const generateAccessToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.ACCESS_SECRET,
    { expiresIn: "15m" } // Short lifespan
  );
};

export const generateRefreshToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.REFRESH_SECRET,
    { expiresIn: "7d" } // Longer lifespan
  );
};
