import { getRecipeById } from "@/app/_actions/recipes/getRecipeById";
import RecipeForm from "@/components/recipeDetails/RecipeForm";
import Navbar from "@/components/shared/Navbar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function Page({ params }: Props) {
  const session = await auth();
  if (!session?.user) redirect("/");

  const { id } = await params;
  const recipe = await getRecipeById(id);

  return (
    <>
      <Navbar />
      <RecipeForm recipe={recipe} mode="update" />
    </>
  );
}

export default Page;
