import mongoose, { Model, models, Schema } from "mongoose";

export type RecipeType = {
  _id: string;
  title: string;
  image?: {
    large?: string;
    small?: string;
  };
  overview: string;
  serving: number;
  prepMinutes: number;
  cookingTime: number;
  ingredients: string[];
  instructions: string[];
  initial: boolean;
};

const recipeSchema = new Schema<RecipeType>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    image: {
      large: String,
      small: String,
    },
    overview: {
      type: String,
      required: [true, "Overview is required"],
    },
    serving: {
      type: Number,
      required: [true, "Serving size is required"],
      min: [0, "Serving size can not be negative"],
    },
    prepMinutes: {
      type: Number,
      required: [true, "Prep minutes size is required"],
      min: [0, "Prep minutes size can not be negative"],
    },
    cookingTime: {
      type: Number,
      required: [true, "Cooking time size is required"],
      min: [0, "Cooking time size can not be negative"],
    },
    ingredients: {
      type: [String],
      required: [true, "Please enter ingredients"],
    },
    instructions: {
      type: [String],
      required: [true, "Please enter instructions"],
    },
    initial: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Recipe: Model<RecipeType> =
  models.Recipe || mongoose.model<RecipeType>("Recipe", recipeSchema);
