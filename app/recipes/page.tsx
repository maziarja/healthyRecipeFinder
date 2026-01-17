import Header from "@/components/recipes/Header";
import Recipes from "@/components/recipes/Recipes";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Suspense } from "react";

function Page() {
  return (
    <>
      <Navbar />
      <Header />
      <Suspense fallback={null}>
        <Recipes />
      </Suspense>
      <Footer />
    </>
  );
}

export default Page;
