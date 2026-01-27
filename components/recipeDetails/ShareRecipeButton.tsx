import { ShareIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";

function ShareRecipeButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size={"icon-md"}
          className="rounded-full"
          onClick={() => console.log("hi")}
        >
          <ShareIcon size={24} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Share recipe</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default ShareRecipeButton;
