import BuiltForRealLife from "@/components/home/BuiltForRealLife";
import CallToAction from "@/components/home/CallToAction";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/auth";

async function Page() {
  const session = await auth();
  console.log(session?.user);
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Separator className="hidden md:block lg:hidden" />
      <BuiltForRealLife />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Page;
