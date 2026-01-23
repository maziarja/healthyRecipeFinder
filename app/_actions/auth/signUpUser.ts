"use server";

import bcrypt from "bcryptjs";
import connectDB from "@/lib/database";
import { SignUpType } from "@/lib/schemas/authSchema";
import { User } from "@/models/User";

export async function signUpUser(data: SignUpType) {
  try {
    await connectDB();
    const existingUser = await User.findOne({ email: data.email });

    if (existingUser) {
      return { success: false, message: "You already have an account" };
    }

    if (data.password !== data.confirmPassword) {
      return { success: false, message: "Password is not match" };
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    await User.create({
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong. Please try again",
    };
  }
}
