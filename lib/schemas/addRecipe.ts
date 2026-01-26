import z from "zod";

export const addRecipeFormSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Can't be more than 100 characters"),
  overview: z
    .string()
    .min(1, "Overview is required")
    .max(500, "Can't be more than 500 characters"),
  image: z.instanceof(File).optional(),
  instructions: z
    .string()
    .min(1, "Instructions are required")
    .max(1000, "Can't be more than 1000 characters"),
  ingredients: z
    .string()
    .min(1, "Ingredients are required")
    .max(1000, "Can't be more than 1000 characters"),
  serving: z
    .string()
    .min(1, "Serving size is required")
    .max(10, "Can't be more than 10 characters"),
  prepMinutes: z
    .string()
    .min(1, "Preparation time is required")
    .max(10, "Can't be more than 10 characters")
    .refine((value) => Number(value) < 15, "Must be less than 15 minutes"),
  cookingTime: z
    .string()
    .min(1, "Cooking time is required")
    .max(10, "Can't be more than 10 characters")
    .refine((value) => Number(value) < 25, "Must be less than 25 minutes"),
});

export type AddRecipeFormType = z.infer<typeof addRecipeFormSchema>;
