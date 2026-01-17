import { Button } from "../ui/button";
import PatternFork from "../ui/icons/pattern-fork";
import PatternKnife from "../ui/icons/pattern-knife";

function CallToAction() {
  return (
    <section className="px-4 pt-16 text-center md:px-8 md:pt-20 lg:mx-auto lg:max-w-314 lg:pt-0">
      <div className="relative space-y-8 overflow-hidden rounded-2xl bg-neutral-200 px-4 py-12 md:space-y-10 md:px-0 md:py-20 lg:py-24">
        <PatternFork className="absolute -bottom-22 -left-12 hidden h-[231.72px] w-[179.13px] md:block lg:-bottom-15 lg:-left-25 lg:h-[390.23px] lg:w-[314.67px]" />
        <PatternKnife className="absolute -top-13 -right-3 hidden size-[171.78px] md:block lg:top-10 lg:-right-17 lg:size-[338.43px]" />
        <div className="space-y-3">
          <h2 className="text-preset-2 md:text-preset-2-tablet text-neutral-900">
            Ready to cook smarter?
          </h2>
          <p className="text-preset-6 text-neutral-800">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
        </div>
        <Button
          size={"mdLg"}
          className="font font-[nunito] text-[18px] leading-[140%] font-bold"
        >
          Browse recipes
        </Button>
      </div>
    </section>
  );
}

export default CallToAction;
