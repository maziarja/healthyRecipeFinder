"use client";

import { UserStarIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import DeleteRecipeDialog from "./DeleteRecipeDialog";
import { useState } from "react";

function RecipeOwnerAction({ recipeId }: { recipeId: string }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Badge asChild className="cursor-pointer">
            {<UserStarIcon size={24} />}
          </Badge>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link
                className="text-preset-9 w-full"
                href={`/recipe/${recipeId}/update`}
              >
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setShowDeleteDialog(true)}
              className="text-preset-9!"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteRecipeDialog
        showDeleteDialog={showDeleteDialog}
        setShowDeleteDialog={setShowDeleteDialog}
        recipeId={recipeId}
      />
    </>
  );
}

export default RecipeOwnerAction;
