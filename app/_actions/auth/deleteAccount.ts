"use server";

import { auth } from "@/lib/auth";
import { deleteImage } from "@/lib/cloudinary/deleteImage";
import connectDB from "@/lib/database";
import { Recipe } from "@/models/Recipe";
import { User } from "@/models/User";
import { logoutUser } from "./logoutUser";

export async function deleteAccount() {
  try {
    await connectDB();

    const session = await auth();

    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    const recipes = await Recipe.find({ owner: session.user.id }).lean();

    recipes.map(async (recipe) => await deleteImage(recipe.image?.small));

    await Recipe.deleteMany({ owner: session.user.id });

    await User.findByIdAndDelete(session.user.id);

    await logoutUser();

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
