import connectDB from "@/lib/database";
import RecipeFilters from "./RecipeFilters";

async function Recipes() {
  await connectDB();
  return (
    <section className="space-y-6 px-4 md:px-8 md:py-0 lg:mx-auto lg:max-w-314 lg:pb-24">
      <RecipeFilters />
    </section>
  );
}

export default Recipes;
