import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import userAuthRouter from "./routes/userAuth.js";
import cookieParser from "cookie-parser";
const app = express();

// Middlewares
const allowedOrigin = ["http://localhost:3000"];
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
// connect to database
connectDB();

// Routes
app.use("/auth", userAuthRouter);
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
