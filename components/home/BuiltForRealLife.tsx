import Image from "next/image";
import BuiltForLifeImage from "@/public/assets/images/image-home-real-life-small.webp";
import BuiltForLifeImageLarge from "@/public/assets/images/image-home-real-life-large.webp";

function BuiltForRealLife() {
  return (
    <section className="grid gap-8 px-4 pt-16 md:gap-10 md:px-8 md:pt-20 lg:mx-auto lg:max-w-314 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
      <div className="space-y-5">
        <h2 className="text-preset-2 md:text-preset-2-tablet lg:text-preset-2-desktop text-neutral-900">
          Built for real life
        </h2>
        <p className="text-preset-6">
          Cooking should n&apos;t be complicated. These recipes come in under{" "}
          <span className="text-preset-5 relative">
            <span className="absolute bottom-1 left-0 -z-1 hidden h-[40%] w-full rounded-sm bg-orange-500 md:block" />
            30 minutes{" "}
          </span>{" "}
          of active time, fit busy schedules, and taste good enough to repeat.
        </p>
        <p className="text-preset-6 text-neutral-800">
          Whether you&apos;re new to the kitchen or just need fresh ideas,
          we&apos;ve got you covered.
        </p>
      </div>

      <Image
        src={BuiltForLifeImage}
        alt="cutting vegetable on cutting board on a kitchen counter"
        loading="eager"
        className="mx-auto rounded-md md:hidden"
      />
      <Image
        src={BuiltForLifeImageLarge}
        alt="cutting vegetable on cutting board on a kitchen counter"
        loading="eager"
        className="mx-auto hidden rounded-md md:block md:rounded-2xl lg:w-full lg:max-w-158.75"
      />
    </section>
  );
}

export default BuiltForRealLife;
