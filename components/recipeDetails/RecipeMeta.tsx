import IconCookTime from "../ui/icons/icon-cook-time";
import IconPrepTime from "../ui/icons/icon-prep-time";
import IconServing from "../ui/icons/icon-servings";

type Props = {
  servingSize: number;
  prepTime: number;
  cookingTime: number;
};

function RecipeMeta({ servingSize, prepTime, cookingTime }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <div className="flex items-center gap-0.5">
        <IconServing />
        <p className="text-preset-9 text-neutral-900">
          Servings: {servingSize}
        </p>
      </div>
      <div className="flex items-center gap-0.5">
        <IconPrepTime />
        <p className="text-preset-9 text-neutral-900">Prep: {prepTime} mins</p>
      </div>
      <div className="flex items-center gap-0.5">
        <IconCookTime />
        <p className="text-preset-9 text-neutral-900">
          Cook: {cookingTime} min
        </p>
      </div>
    </div>
  );
}

export default RecipeMeta;
