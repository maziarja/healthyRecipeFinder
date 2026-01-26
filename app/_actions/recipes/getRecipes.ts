"use server";

import { auth } from "@/lib/auth";
import { PAGE_SIZE } from "@/lib/const";
import connectDB from "@/lib/database";
import { recipesSchema } from "@/lib/schemas/recipe";
import { Recipe } from "@/models/Recipe";

export async function getRecipes(
  page?: string,
  cookingTime?: string,
  prepTime?: string,
  query?: string,
) {
  await connectDB();

  const session = await auth();
  const userId = session?.user?.id;

  const visibilityFilter = userId
    ? {
        $or: [{ owner: null }, { owner: userId }],
      }
    : {
        owner: null,
      };

  const filter = {
    ...visibilityFilter,
    ...(cookingTime !== undefined && {
      cookingTime: {
        $gte: Number(cookingTime),
        $lt: Number(cookingTime) + 5,
      },
    }),
    ...(prepTime !== undefined && {
      prepMinutes: { $gte: Number(prepTime), $lt: Number(prepTime) + 5 },
    }),

    ...(query && {
      $or: [
        { title: { $regex: query, $options: "i" } },
        { ingredients: { $regex: query, $options: "i" } },
      ],
    }),
  };

  const skip = (Number(page) - 1) * PAGE_SIZE;

  const [initialRecipes, numOfRecipes] = await Promise.all([
    Recipe.find(filter)
      .skip(skip)
      .limit(PAGE_SIZE)
      .sort({ createdAt: -1 })
      .lean(),
    Recipe.countDocuments(filter),
  ]);

  // Later on we add User recipes here

  const plainRecipes = initialRecipes.map((recipe) => {
    return {
      ...recipe,
      _id: recipe._id.toString(),
      owner: recipe.owner?.toString() || null,
    };
  });

  const validPlainRecipes = recipesSchema.safeParse(plainRecipes);

  if (!validPlainRecipes.success) {
    console.error(validPlainRecipes.error);
    throw new Error(validPlainRecipes.error.issues[0].message);
  }

  return { recipes: validPlainRecipes.data, numOfRecipes };
}
