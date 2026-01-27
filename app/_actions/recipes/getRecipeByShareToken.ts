"use server";

import connectDB from "@/lib/database";
import { shareRecipe } from "@/lib/schemas/shareRecipe";
import { Recipe } from "@/models/Recipe";

export async function getRecipeByShareToken(shareToken: string) {
  await connectDB();

  const recipe = await Recipe.findOne({
    shareToken,
    isPublic: true,
  }).lean();

  const plainRecipe = {
    ...recipe,
    _id: recipe?._id.toString(),
    owner: recipe?.owner?.toString() || null,
  };
  const validPlainRecipe = shareRecipe.safeParse(plainRecipe);

  if (!validPlainRecipe.success) {
    console.error(validPlainRecipe.error);
    throw new Error(validPlainRecipe.error.issues[0].message);
  }

  return validPlainRecipe.data;
}
