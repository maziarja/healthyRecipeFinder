import Navbar from "@/components/shared/Navbar";
import { getSession } from "../_actions/auth/getSession";
import { redirect } from "next/navigation";
import RecipeForm from "@/components/recipeDetails/RecipeForm";

async function Page() {
  const { isAuthenticated } = await getSession();

  if (!isAuthenticated) redirect("/");

  return (
    <>
      <Navbar />
      <RecipeForm />
    </>
  );
}

export default Page;
