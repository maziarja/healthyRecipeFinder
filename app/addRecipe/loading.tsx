import RecipeFormSkeleton from "@/components/recipeDetails/RecipeFormSkeleton";
import Navbar from "@/components/shared/Navbar";

function Loading() {
  return (
    <>
      <Navbar />
      <RecipeFormSkeleton />;
    </>
  );
}

export default Loading;
