"use server";

import { deleteImage } from "@/lib/cloudinary/deleteImage";
import connectDB from "@/lib/database";
import { Recipe } from "@/models/Recipe";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteRecipe(id: string) {
  await connectDB();

  // 1. Find the recipe first to get the image
  const recipe = await Recipe.findById(id);

  if (!recipe) {
    throw new Error("Recipe not found");
  }

  // 2. Delete image from Cloudinary
  const image = recipe.image?.small;
  await deleteImage(image);

  // 3. Delete recipe from database
  await Recipe.findByIdAndDelete(id);

  // 4. Revalidate and redirect
  revalidatePath("/recipes");
  redirect("/recipes");
}
