import { RecipeType } from "@/models/Recipe";
import IconBulletPoint from "../ui/icons/icon-bullet-point";

type Props = {
  ingredients: RecipeType["ingredients"];
};

function RecipeIngredients({ ingredients }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-preset-4 text-neutral-900">Ingredients:</p>
      <div className="space-y-2">
        {ingredients.map((ingredient, i) => (
          <div key={i} className="flex items-center gap-2">
            <div>
              <IconBulletPoint className="size-6" />
            </div>
            <p className="text-preset-6 text-neutral-600">{ingredient}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeIngredients;
