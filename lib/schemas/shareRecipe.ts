import z from "zod";

export const shareRecipe = z.object({
  _id: z.string(),
  title: z.string(),
  image: z
    .object({
      large: z.string().optional(),
      small: z.string().optional(),
    })
    .optional(),
  overview: z.string(),
  serving: z.number(),
  prepMinutes: z.number(),
  cookingTime: z.number(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  isPublic: z.boolean(),
  shareToken: z.string().nullable(),
});
