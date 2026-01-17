function Header() {
  return (
    <section className="max-w-298 space-y-3 px-4 py-12 md:px-8 md:pt-16 md:pb-12 lg:mx-auto lg:w-[78%] lg:pt-20 lg:pb-16 lg:text-center">
      <div className="max-w-183 space-y-3 text-pretty lg:mx-auto lg:text-center">
        <h1 className="text-preset-2 md:text-preset-2-tablet text-neutral-900">
          Explore our simple, healthy recipes
        </h1>
        <p className="text-preset-6 text-pretty text-neutral-600 lg:mx-auto">
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </div>
    </section>
  );
}

export default Header;
