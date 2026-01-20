import { getRecipeById } from "@/app/_actions/getRecipeById";
import MoreRecipes from "@/components/recipeDetails/MoreRecipes";
import Recipe from "@/components/recipeDetails/Recipe";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function Page({ params }: Props) {
  const { id } = await params;
  const recipe = await getRecipeById(id);
  return (
    <>
      <Navbar />
      <section className="px-4 py-12 md:px-8 lg:mx-auto lg:max-w-314 lg:space-y-16 lg:pb-24">
        <Recipe recipe={recipe} />
        <Separator />
        <Suspense fallback={<p>Loading...</p>}>
          <MoreRecipes currentRecipeId={id} />
        </Suspense>
      </section>
      <Separator />
      <Footer />
    </>
  );
}

export default Page;
