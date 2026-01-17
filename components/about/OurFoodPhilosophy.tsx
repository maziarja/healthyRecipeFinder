import IconBulletPoint from "../ui/icons/icon-bullet-point";

function OurFoodPhilosophy() {
  return (
    <section className="mx-auto grid max-w-314 gap-10 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-24">
      <h2 className="text-preset-2 md:text-preset-2-tablet">
        Our food philosophy
      </h2>
      <div className="space-y-6 md:space-y-8 lg:space-y-12">
        <div className="flex gap-5">
          <div>
            <IconBulletPoint />
          </div>
          <div className="space-y-3">
            <p className="text-preset-4 text-neutral-900">
              Whole ingredients first.
            </p>
            <p className="text-preset-6 text-neutral-600">
              Fresh produce, grains, legumes, herbs, and quality fats form the
              backbone of every recipe.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <IconBulletPoint />
          </div>
          <div className="space-y-3">
            <p className="text-preset-4 text-neutral-900">
              Flavor without compromise.
            </p>
            <p className="text-preset-6 text-neutral-600">
              Spices, citrus, and natural sweetness replace excess salt, sugar,
              and additives.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <IconBulletPoint />
          </div>
          <div className="space-y-3">
            <p className="text-preset-4 text-neutral-900">Respect for time.</p>
            <p className="text-preset-6 text-neutral-600">
              Weeknight meals should slot into real schedules; weekend cooking
              can be leisurely but never wasteful.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <IconBulletPoint />
          </div>
          <div className="space-y-3">
            <p className="text-preset-4 text-neutral-900">
              Sustainable choices.
            </p>
            <p className="text-preset-6 text-neutral-600">
              Short ingredient lists cut down on food waste and carbon
              footprint, while plant-forward dishes keep things planet-friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurFoodPhilosophy;
