"use server";

import { signIn } from "@/lib/auth";
import { LoginType } from "@/lib/schemas/authSchema";

export async function loginUser(data: LoginType) {
  try {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
