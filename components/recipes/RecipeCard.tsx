"use client";

import { RecipeType } from "@/models/Recipe";
import { Button } from "../ui/button";
import Image from "next/image";
import generalFoodPhoto from "@/public/assets/images/generalFood.jpg";
import Link from "next/link";
import RecipeMeta from "../recipeDetails/RecipeMeta";
import RecipeOwnerAction from "../recipeDetails/RecipeOwnerAction";
import ShareRecipeButton from "../recipeDetails/ShareRecipeButton";

function RecipeCard({ recipe }: { recipe: RecipeType }) {
  return (
    <div className="bg-card border-border flex flex-col gap-4 rounded-[10px] border p-2 shadow-[0_8px_16px_-9px_#163A3429]">
      <div className="space-y-4">
        <div className="relative h-75 md:h-112.5 lg:h-75">
          <Image
            src={recipe.image?.small || generalFoodPhoto}
            alt={recipe.title}
            fill
            className="rounded-[10px] object-cover md:hidden"
          />
          <Image
            src={recipe.image?.large || recipe.image?.small || generalFoodPhoto}
            alt={recipe.title}
            fill
            className="hidden rounded-[10px] object-cover md:block"
          />
        </div>
        <div className="space-y-4 px-2">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <p className="text-preset-5 line-clamp-1 text-neutral-900">
                {recipe.title}
              </p>
              {recipe.owner && (
                <div className="flex items-center gap-2">
                  <ShareRecipeButton />
                  <RecipeOwnerAction recipeId={recipe._id} />
                </div>
              )}
            </div>
            <p className="text-preset-9 line-clamp-2 text-neutral-600">
              {recipe.overview}
            </p>
          </div>
          <RecipeMeta
            servingSize={recipe.serving}
            prepTime={recipe.prepMinutes}
            cookingTime={recipe.cookingTime}
          />
        </div>
      </div>
      <Button size={"md"} className="mt-auto rounded-full" asChild>
        <Link className="text-preset-8!" href={`/recipe/${recipe._id}`}>
          View Recipe
        </Link>
      </Button>
    </div>
  );
}

export default RecipeCard;
