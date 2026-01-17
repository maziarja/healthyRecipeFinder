import Header from "@/components/recipes/Header";
import Recipes from "@/components/recipes/Recipes";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

function Page() {
  return (
    <>
      <Navbar />
      <Header />
      <Recipes />
      <Footer />
    </>
  );
}

export default Page;
