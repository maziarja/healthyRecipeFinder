"use server";

import connectDB from "@/lib/database";
import { recipeSchema } from "@/lib/schemas/recipe";
import { Recipe } from "@/models/Recipe";

export async function getRecipeById(id: string) {
  await connectDB();

  const recipe = await Recipe.findById(id).lean();

  const plainRecipe = {
    ...recipe,
    _id: recipe?._id.toString(),
    owner: recipe?.owner?.toString() || null,
  };

  const validPlainRecipe = recipeSchema.safeParse(plainRecipe);

  if (!validPlainRecipe.success) {
    console.error(validPlainRecipe.error);
    throw new Error(validPlainRecipe.error.issues[0].message);
  }

  return validPlainRecipe.data;
}
