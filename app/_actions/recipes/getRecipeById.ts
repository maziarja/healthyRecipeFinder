"use server";

import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import { recipeSchema } from "@/lib/schemas/recipe";
import { Recipe } from "@/models/Recipe";

export async function getRecipeById(id: string) {
  await connectDB();
  const session = await auth();

  const recipe = await Recipe.findOne({
    _id: id,
    $or: [{ owner: session?.user?.id }, { owner: null }],
  }).lean();

  if (!recipe) {
    throw new Error("Unauthorized");
  }

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
