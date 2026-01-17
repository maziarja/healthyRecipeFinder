import Image from "next/image";
import ourMissionImage from "@/public/assets/images/image-about-our-mission-small.webp";
import ourMissionImageLarge from "@/public/assets/images/image-about-our-mission-large.webp";

function OurMission() {
  return (
    <section className="mx-auto grid max-w-314 items-center gap-10 px-4 pt-12 pb-16 md:gap-16 md:px-8 md:pt-16 md:pb-20 lg:grid-cols-2 lg:pt-20 lg:pb-24">
      <div className="space-y-6">
        <p className="text-preset-5 w-max rounded-md bg-orange-500 px-1.5 py-0.5 text-neutral-900">
          Our mission
        </p>
        <h2 className="text-preset-2 md:text-preset-2-tablet">
          Help more people cook nourishing meals, more often.
        </h2>
        <div className="text-preset-6 space-y-4 text-neutral-600">
          <p>
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p>
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </div>
      </div>
      <Image
        src={ourMissionImage}
        alt="a woman cutting carrots on a kitchen counter"
        className="mx-auto rounded-xl md:hidden"
        loading="eager"
      />
      <Image
        src={ourMissionImageLarge}
        alt="a woman cutting carrots on a kitchen counter"
        className="mx-auto hidden rounded-xl md:block"
        loading="eager"
      />
    </section>
  );
}

export default OurMission;
