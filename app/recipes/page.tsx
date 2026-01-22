import Header from "@/components/recipes/Header";
import Recipes from "@/components/recipes/Recipes";
import RecipesSkeleton from "@/components/recipes/RecipesSkeleton";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{
    page: string;
    cookingTime: string;
    prepTime: string;
    query: string;
  }>;
};

async function Page({ searchParams }: Props) {
  const { page = "1", cookingTime, prepTime, query } = await searchParams;

  return (
    <>
      <Navbar />
      <Header />
      <Suspense fallback={<RecipesSkeleton />}>
        <Recipes
          page={page}
          cookingTime={cookingTime}
          prepTime={prepTime}
          query={query}
        />
      </Suspense>
      <Footer />
    </>
  );
}

export default Page;
