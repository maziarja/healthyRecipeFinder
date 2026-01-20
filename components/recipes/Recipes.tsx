import { getRecipes } from "@/app/_actions/getRecipes";
import RecipeFilters from "./RecipeFilters";
import RecipeCard from "./RecipeCard";

async function Recipes() {
  const recipes = await getRecipes();

  return (
    <section className="space-y-6 px-4 md:px-8 md:py-0 lg:mx-auto lg:max-w-314 lg:pb-24">
      <RecipeFilters />
      <div className="grid gap-8 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

export default Recipes;
