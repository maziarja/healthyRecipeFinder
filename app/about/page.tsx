import BeyondThePlate from "@/components/about/BeyondThePlate";
import OurFoodPhilosophy from "@/components/about/OurFoodPhilosophy";
import OurMission from "@/components/about/OurMission";
import WhyWeExist from "@/components/about/WhyWeExist";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Separator } from "@/components/ui/separator";

function Page() {
  return (
    <>
      <Navbar />
      <OurMission />
      <Separator />
      <WhyWeExist />
      <Separator />
      <OurFoodPhilosophy />
      <Separator />
      <BeyondThePlate />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Page;
