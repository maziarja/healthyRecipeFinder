"use server";

import { PAGE_SIZE } from "@/lib/const";
import connectDB from "@/lib/database";
import { recipesSchema } from "@/lib/schemas/recipe";
import { Recipe } from "@/models/Recipe";

export async function getRecipes(page: number) {
  await connectDB();

  const initialRecipes = await Recipe.find({
    initial: true,
  })
    .skip((page - 1) * PAGE_SIZE)
    .limit(PAGE_SIZE)
    .lean();

  // Later on we add User recipes here

  const plainRecipes = initialRecipes.map((recipe) => {
    return {
      ...recipe,
      _id: recipe._id.toString(),
    };
  });

  const validPlainRecipes = recipesSchema.safeParse(plainRecipes);

  if (!validPlainRecipes.success) {
    console.error(validPlainRecipes.error);
    throw new Error(validPlainRecipes.error.issues[0].message);
  }

  return validPlainRecipes.data;
}
