import z from "zod";

// sign up
export const signUpSchema = z
  .object({
    fullName: z.string().trim().min(3, "Invalid name"),
    email: z.email().trim().min(2, "Invalid email address"),
    password: z
      .string()
      .trim()
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

export type SignUpType = z.infer<typeof signUpSchema>;

//   login
export const loginSchema = z.object({
  email: z.email().trim().min(2, "Invalid email address"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});

export type LoginType = z.infer<typeof loginSchema>;
