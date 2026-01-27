import { getRecipeByShareToken } from "@/app/_actions/recipes/getRecipeByShareToken";
import Recipe from "@/components/recipeDetails/Recipe";

type Props = {
  params: Promise<{
    token: string;
  }>;
};

async function Page({ params }: Props) {
  const { token } = await params;
  const shareRecipe = await getRecipeByShareToken(token);

  const typedRecipe = { ...shareRecipe, owner: null };

  return (
    <section className="px-4 py-12 md:px-8 lg:mx-auto lg:max-w-314 lg:space-y-16 lg:pb-24">
      <Recipe recipe={typedRecipe} />
    </section>
  );
}

export default Page;
