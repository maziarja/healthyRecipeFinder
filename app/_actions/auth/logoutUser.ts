"use server";

import { signOut } from "@/lib/auth";

export async function logoutUser() {
  try {
    await signOut({ redirect: false });
    return { success: true };
  } catch (error) {
    console.error("Error logging out:", error);
    return { success: false };
  }
}
