import { getRecipes } from "@/app/_actions/getRecipes";
import RecipeFilters from "./RecipeFilters";
import RecipeCard from "./RecipeCard";
import PaginationRecipes from "./PaginationRecipes";
import EmptyRecipes from "./EmptyRecipes";

type Props = {
  page: string;
  cookingTime: string;
  prepTime: string;
  query: string;
};

async function Recipes({ page, cookingTime, prepTime, query }: Props) {
  const { recipes, numOfRecipes } = await getRecipes(
    page,
    cookingTime,
    prepTime,
    query,
  );

  return (
    <section className="space-y-6 px-4 md:px-8 md:py-0 lg:mx-auto lg:max-w-314 lg:pb-24">
      <RecipeFilters />
      <div className="grid gap-8 lg:grid-cols-3">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))
        ) : (
          <EmptyRecipes />
        )}
      </div>
      <PaginationRecipes currentPage={page} numOfRecipes={numOfRecipes} />
    </section>
  );
}

export default Recipes;
