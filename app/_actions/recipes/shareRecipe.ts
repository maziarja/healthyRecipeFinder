"use server";

import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";

export async function shareRecipe() {
  await connectDB();
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
}
