import { Router } from "express";
import {
  login,
  logout,
  refreshAccessToken,
  register,
} from "../controllers/auth.controller.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { registerSchema } from "../validators/register.validator.js";
import { loginSchema } from "../validators/login.validator.js";
import verifyAccessToken from "../middlewares/verifyToken.js";
const userAuthRouter = Router();
userAuthRouter.post("/register", validateRequest(registerSchema), register);
userAuthRouter.post("/login", validateRequest(loginSchema), login);
userAuthRouter.post("/logout", logout);
userAuthRouter.get("/refresh", refreshAccessToken);

// Only apply access token to protected routes
// No protected route  yet
export default userAuthRouter;
