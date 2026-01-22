import Image from "next/image";
import { Button } from "../ui/button";
import headerImage from "@/public/assets/images/image-home-hero-small.webp";
import headerImageLarge from "@/public/assets/images/image-home-hero-large.webp";
import Link from "next/link";

function Hero() {
  return (
    <section className="space-y-10 bg-[url('/assets/images/pattern-squiggle-1.svg')] bg-contain bg-bottom bg-no-repeat px-4 pt-12 md:px-8 md:pt-12 lg:space-y-20 lg:pt-20 lg:text-center">
      <div className="space-y-8 lg:space-y-10">
        <div className="space-y-4">
          <h1 className="text-preset-1 md:text-preset-1-tablet lg:text-preset-1-desktop text-neutral-900">
            <span className="relative">
              Healthy
              <span className="absolute top-8 left-0 -z-1 h-[40%] w-[calc(100%+7px)] rounded-sm bg-orange-500 opacity-50 md:top-10.5" />
            </span>{" "}
            meals, zero fuss
          </h1>
          <p className="text-preset-6 text-pretty text-neutral-800">
            Discover eight quick, whole-food recipes that you can cook tonight{" "}
            <span className="lg:block">—no processed junk, no guesswork.</span>
          </p>
        </div>
        <Button size={"xl"} asChild>
          <Link href="/recipes" className="text-preset-5!">
            Start exploring
          </Link>
        </Button>
      </div>

      <Image
        src={headerImage}
        alt="a woman cutting cucumber to prepare healthy meal"
        loading="eager"
        className="mx-auto rounded-md shadow-[0_0_0_3.45px_#FFFFFF] md:hidden"
      />
      <Image
        src={headerImageLarge}
        alt="a woman cutting cucumber to prepare healthy meal"
        loading="eager"
        className="mx-auto hidden w-full max-w-298 rounded-md shadow-[0_0_0_7.09px_#FFFFFF] md:block lg:shadow-[0_0_0_12px_#FFFFFF]"
      />
    </section>
  );
}

export default Hero;
