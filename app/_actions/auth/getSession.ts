"use server";

import { auth } from "@/lib/auth";

export async function getSession() {
  try {
    const session = await auth();
    return {
      user: session?.user
        ? {
            id: session.user.id,
            email: session.user.email,
            name: session.user.name,
          }
        : null,
      isAuthenticated: !!session?.user,
    };
  } catch (error) {
    console.error("Error getting session:", error);
    return {
      user: null,
      isAuthenticated: false,
    };
  }
}
