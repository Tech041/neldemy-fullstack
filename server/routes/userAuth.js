import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
const userAuthRouter = Router();
userAuthRouter.post("/register", register);
userAuthRouter.post("/login", login);
userAuthRouter.post("/logout", logout);

export default userAuthRouter;
