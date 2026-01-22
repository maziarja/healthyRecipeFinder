import Header from "@/components/recipes/Header";
import Recipes from "@/components/recipes/Recipes";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{
    page: number;
  }>;
};

async function Page({ searchParams }: Props) {
  const { page = 1 } = await searchParams;

  return (
    <>
      <Navbar />
      <Header />
      <Suspense fallback={<p>Loading....</p>}>
        <Recipes page={page} />
      </Suspense>
      <Footer />
    </>
  );
}

export default Page;
