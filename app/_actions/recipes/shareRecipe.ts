"use server";

import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import { Recipe } from "@/models/Recipe";
import { revalidatePath } from "next/cache";

export async function shareRecipe(recipeId: string) {
  await connectDB();
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const recipe = await Recipe.findOne({
    _id: recipeId,
    owner: session?.user?.id,
  });

  if (!recipe) {
    throw new Error("Unauthorized");
  }

  const token = crypto.randomUUID();
  recipe.isPublic = !recipe.isPublic;
  recipe.shareToken = recipe.shareToken ? null : token;

  await recipe.save();
  revalidatePath("/recipes");

  return recipe.shareToken
    ? `${process.env.NEXT_PUBLIC_APP_URL}/recipes/share/${token}`
    : null;
}
