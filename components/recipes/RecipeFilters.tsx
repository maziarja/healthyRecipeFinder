import CookTimeFilter from "./CookTimeFilter";
import PrepTimeFilter from "./PrepTimeFilter";
import SearchQuery from "./SearchQuery";

function RecipeFilters() {
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <div className="flex flex-col gap-3 md:flex-row">
        <PrepTimeFilter />
        <CookTimeFilter />
      </div>
      <div className="md:ml-auto md:min-w-80 lg:min-w-77.5">
        <SearchQuery />
      </div>
    </div>
  );
}

export default RecipeFilters;
