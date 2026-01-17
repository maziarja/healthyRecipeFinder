import { DotIcon } from "lucide-react";
import Image from "next/image";
import beyondThePlateImage from "@/public/assets/images/image-about-beyond-the-plate-small.webp";
import beyondThePlateImageLarge from "@/public/assets/images/image-about-beyond-the-plate-large.webp";

function BeyondThePlate() {
  return (
    <section className="mx-auto grid gap-8 px-4 pt-12 md:gap-10 md:px-8 md:pt-20 md:pb-0 lg:max-w-314 lg:grid-cols-[1.5fr_2fr] lg:items-center lg:gap-16 lg:py-24">
      <div className="space-y-5">
        <h2 className="text-preset-2 md:text-preset-2-tablet text-neutral-900">
          Beyond the plate
        </h2>
        <div className="space-y-3">
          <p className="text-preset-6 text-neutral-600">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>

          <ul className="text-preset-6 text-neutral-600">
            <li className="flex">
              <div>
                <DotIcon size={30} />
              </div>
              <span>Encourage family dinners and social cooking.</span>
            </li>

            <li className="flex">
              <div>
                <DotIcon size={30} />
              </div>
              <span>
                Reduce reliance on single-use packaging and delivery waste.
              </span>
            </li>

            <li className="flex">
              <div>
                <DotIcon size={30} />
              </div>
              <span>
                Spark curiosity about seasonal produce and local agriculture.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Image
        src={beyondThePlateImage}
        alt="a happy family in kitchen with vegetable on their hands"
        className="mx-auto rounded-xl md:hidden"
      />
      <Image
        src={beyondThePlateImageLarge}
        alt="a happy family in kitchen with vegetable on their hands"
        className="mx-auto hidden rounded-xl md:block"
      />
    </section>
  );
}

export default BeyondThePlate;
