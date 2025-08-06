import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email().min(10, { message: "Valid email is required" }),
  password: z
    .string()
    .min(10, { message: "Password must be at least 10 characters" }),
});
