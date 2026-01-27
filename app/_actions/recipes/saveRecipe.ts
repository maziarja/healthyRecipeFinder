"use server";

import { auth } from "@/lib/auth";
import { cloudinaryUploadImage } from "@/lib/cloudinary/uploadImage";
import connectDB from "@/lib/database";
import { Recipe } from "@/models/Recipe";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveRecipe(formData: FormData, recipeId?: string) {
  await connectDB();

  const session = await auth();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  if (recipeId) {
    const recipe = await Recipe.findOne({
      _id: recipeId,
      owner: session?.user?.id,
    });

    if (!recipe) {
      throw new Error("Unauthorized");
    }
  }

  const image = formData.get("image") as File | null;

  // Upload image on cloudinary
  const secure_url = await cloudinaryUploadImage(image);

  const newRecipe = {
    owner: session.user.id,
    title: formData.get("title")?.toString(),
    overview: formData.get("overview")?.toString(),
    ingredients: formData.get("ingredients")?.toString().split(","),
    instructions: formData.get("instructions")?.toString().split(","),
    serving: Number(formData.get("serving")),
    prepMinutes: Number(formData.get("prepMinutes")),
    cookingTime: Number(formData.get("cookingTime")),
    ...(secure_url && { image: { small: secure_url } }),
  };

  if (recipeId) {
    // update
    await Recipe.findByIdAndUpdate(recipeId, newRecipe);
  } else {
    // create
    await Recipe.create(newRecipe);
  }

  revalidatePath("/recipes");
  redirect("/recipes");
}
