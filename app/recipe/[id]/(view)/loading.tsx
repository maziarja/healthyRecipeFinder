import RecipeSkeleton from "@/components/recipeDetails/RecipeSkeleton";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Separator } from "@/components/ui/separator";

function Loading() {
  return (
    <>
      <Navbar />
      <section className="px-4 py-12 md:px-8 lg:mx-auto lg:max-w-314 lg:space-y-16 lg:pb-24">
        <RecipeSkeleton />
        <Separator />
      </section>
      <Separator />
      <Footer />
    </>
  );
}

export default Loading;
