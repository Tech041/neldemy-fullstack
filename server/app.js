import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import userAuthRouter from "./routes/userAuth.js";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const app = express();

// Middlewares
const allowedOrigin = [process.env.LOCAL_HOST, process.env.CLIENT_URL];
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
app.use(helmet());
// connect to database
connectDB();

// Apply rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later!!!",
  standardHeaders: true,
  legacyHeaders: false,
});
// Applied to all requests
app.use(limiter);
// Routes
app.use("/auth", userAuthRouter);
app.get("/", (req, res) => {
  res.send("API WORKING");
});
export default app;
