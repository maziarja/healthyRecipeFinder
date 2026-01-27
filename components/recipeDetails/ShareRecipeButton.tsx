"use client";

import { ShareIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import { shareRecipe } from "@/app/_actions/recipes/shareRecipe";
import { useEffect, useState } from "react";
import SharedUrlDialog from "./SharedUrlDialog";

function ShareRecipeButton({
  recipeId,
  isPublic,
}: {
  recipeId: string;
  isPublic: boolean;
}) {
  const [shareUrl, setShareUrl] = useState<null | string>(null);

  const [sharedDialogOpen, setSharedDialogOpen] = useState(false);

  const [isPublicState, setIsPublicState] = useState(isPublic);

  async function handleShareRecipe() {
    const url = await shareRecipe(recipeId);
    setShareUrl(url);
    if (url) {
      setSharedDialogOpen(true);
    }
  }

  useEffect(() => {
    setIsPublicState(isPublic);
  }, [isPublic]);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={isPublicState ? "default" : "outline"}
            size={"icon-md"}
            className="rounded-full"
            onClick={handleShareRecipe}
          >
            <ShareIcon
              size={24}
              color={isPublicState ? "#ffffff" : "#163a34"}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isPublicState ? "Stop sharing" : "Share recipe"}</p>
        </TooltipContent>
      </Tooltip>
      <SharedUrlDialog
        sharedDialogOpen={sharedDialogOpen}
        setSharedDialogOpen={setSharedDialogOpen}
        url={shareUrl}
      />
    </>
  );
}

export default ShareRecipeButton;
