import AboutSkeleton from "@/components/about/AboutSkeleton";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Separator } from "@/components/ui/separator";

function Loading() {
  return (
    <>
      <Navbar />
      <AboutSkeleton />
      <Separator />
      <Footer />
    </>
  );
}

export default Loading;
