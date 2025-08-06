import { z } from "zod";

export const loginSchema = z.object({
  email: z.email().min(10, { message: "Valid email is required" }),
  password: z
    .string()
    .min(10, { message: "Password must be at least 10 characters" }),
});
