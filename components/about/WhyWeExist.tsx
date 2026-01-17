import IconBulletPoint from "../ui/icons/icon-bullet-point";

function WhyWeExist() {
  return (
    <section className="mx-auto grid max-w-314 gap-10 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-24">
      <h2 className="text-preset-2 md:text-preset-2-tablet">Why we Exist</h2>
      <div className="space-y-6 md:space-y-8 lg:space-y-12">
        <div className="flex gap-5">
          <div>
            <IconBulletPoint />
          </div>
          <div className="space-y-3">
            <p className="text-preset-4 text-neutral-900">
              Cut through the noise.
            </p>
            <p className="text-preset-6 text-neutral-600">
              The internet is bursting with recipes, yet most busy cooks still
              default to take-away or packaged foods. We curate a tight
              collection of fool-proof dishes so you can skip the scrolling and
              start cooking.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <IconBulletPoint />
          </div>
          <div className="space-y-3">
            <p className="text-preset-4 text-neutral-900">
              Empower home kitchens.
            </p>
            <p className="text-preset-6 text-neutral-600">
              When you control what goes into your meals, you control how you
              feel. Every recipe is built around unrefined ingredients and ready
              in about half an hour of active prep.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <IconBulletPoint />
          </div>
          <div className="space-y-3">
            <p className="text-preset-4 text-neutral-900">
              Make healthy look good.
            </p>
            <p className="text-preset-6 text-neutral-600">
              High-resolution imagery shows you exactly what success looks
              like—because we eat with our eyes first, and confidence matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWeExist;
