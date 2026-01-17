import IconMinimumFuss from "../ui/icons/icon-minimum-fuss";
import IconSearchInSeconds from "../ui/icons/icon-search-in-seconds";
import IconWholeFoodRecipes from "../ui/icons/icon-whole-food-recipes";

function Features() {
  return (
    <section className="space-y-8 px-4 pt-16 md:space-y-12 md:px-8 md:py-20 lg:mx-auto lg:max-w-314 lg:pb-24">
      <h2 className="text-preset-2 md:text-preset-2-tablet lg:text-center">
        What you&apos;ll get
      </h2>
      <div className="flex flex-col gap-6 md:gap-8 lg:flex-row">
        <div className="space-y-5 md:space-y-6 lg:w-full">
          <IconWholeFoodRecipes />
          <div className="space-y-3">
            <h3 className="text-preset-3 text-neutral-900">
              Whole-food recipes
            </h3>
            <p className="text-preset-6 text-neutral-800">
              Each dish uses everyday, unprocessed ingredients.
            </p>
          </div>
        </div>
        <div className="space-y-5 md:space-y-6 lg:w-full">
          <IconMinimumFuss />
          <div className="space-y-3">
            <h3 className="text-preset-3 text-neutral-900">Minimum fuss</h3>
            <p className="text-preset-6 text-neutral-800">
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </div>
        </div>
        <div className="space-y-5 md:space-y-6 lg:w-full">
          <IconSearchInSeconds />
          <div className="space-y-3">
            <h3 className="text-preset-3 text-neutral-900">
              Search in seconds
            </h3>
            <p className="text-preset-6 text-neutral-800">
              Filter by name or ingredient and jump straight to the recipe you
              need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
