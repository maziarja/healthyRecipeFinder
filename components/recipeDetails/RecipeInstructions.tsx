import { RecipeType } from "@/models/Recipe";
import IconBulletPoint from "../ui/icons/icon-bullet-point";

type Props = {
  instructions: RecipeType["instructions"];
};

function RecipeInstructions({ instructions }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-preset-4 text-neutral-900">Instructions:</p>
      <div className="space-y-2">
        {instructions.map((instruction, i) => (
          <div key={i} className="flex items-start gap-2">
            <div>
              <IconBulletPoint className="mt-1 size-6" />
            </div>
            <p className="text-preset-6 text-neutral-600">{instruction}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeInstructions;
