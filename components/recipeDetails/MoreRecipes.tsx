import { getRecipes } from "@/app/_actions/recipes/getRecipes";
import RecipeCard from "../recipes/RecipeCard";

async function MoreRecipes({ currentRecipeId }: { currentRecipeId: string }) {
  const { recipes } = await getRecipes();

  const moreRecipes = recipes
    .filter((recipe) => recipe._id !== currentRecipeId)
    .slice(0, 3);

  return (
    <div className="space-y-6 pt-12 lg:p-0">
      <p className="text-preset-3 text-neutral-900">More recipes</p>
      <div className="grid gap-8 lg:grid-cols-3">
        {moreRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default MoreRecipes;
