import mongoose, { Model, models, Schema } from "mongoose";

type UserType = {
  email: string;
  password: string;
  fullName: string;
};

export const userSchema = new Schema<UserType>({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "You already have an account"],
  },
  password: {
    type: String,
    minLength: [6, "Password must be at least 6 characters"],
    required: [true, "Password is required"],
  },
  fullName: {
    type: String,
    required: [true, "Full name is required"],
  },
});

export const User: Model<UserType> =
  models.User || mongoose.model<UserType>("User", userSchema);
