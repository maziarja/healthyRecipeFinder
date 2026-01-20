"use client";

import { RecipeType } from "@/models/Recipe";
import Image from "next/image";
import generalFoodPhoto from "@/public/assets/images/generalFood.jpg";
import RecipeMeta from "./RecipeMeta";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";

function Recipe({ recipe }: { recipe: RecipeType }) {
  return (
    <div className="pb-12 lg:p-0">
      <div className="space-y-4">
        <div className="text-preset-7 text-neutral-900">
          <span className="opacity-60">Recipes / </span>
          <span className="capitalize opacity-100">{recipe.title}</span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[580px_1fr]">
          <div className="relative aspect-square lg:max-h-145 lg:max-w-145">
            <Image
              src={recipe.image?.small || generalFoodPhoto}
              alt={recipe.title}
              fill
              className="rounded-[10px] object-cover md:hidden"
            />
            <Image
              src={
                recipe.image?.large || recipe.image?.small || generalFoodPhoto
              }
              alt={recipe.title}
              fill
              className="hidden rounded-[10px] object-cover md:block"
            />
          </div>
          <div className="space-y-5">
            <p className="text-preset-2 md:text-preset-2-tablet text-neutral-900">
              {recipe.title}
            </p>
            <p className="text-preset-6 text-neutral-600">{recipe.overview}</p>
            <RecipeMeta
              servingSize={recipe.serving}
              prepTime={recipe.prepMinutes}
              cookingTime={recipe.cookingTime}
            />
            <RecipeIngredients ingredients={recipe.ingredients} />
            <RecipeInstructions instructions={recipe.instructions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
