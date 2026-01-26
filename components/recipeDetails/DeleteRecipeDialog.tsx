"use client";

import { deleteRecipe } from "@/app/_actions/recipes/deleteRecipe";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

type Props = {
  setShowDeleteDialog: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteDialog: boolean;
  recipeId: string;
};

function DeleteRecipeDialog({
  setShowDeleteDialog,
  showDeleteDialog,
  recipeId,
}: Props) {
  async function handleDeleteRecipe() {
    await deleteRecipe(recipeId);
  }

  return (
    <AlertDialog onOpenChange={setShowDeleteDialog} open={showDeleteDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this recipe?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. The recipe will be permanently removed
            from your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant={"destructive"}
            onClick={handleDeleteRecipe}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteRecipeDialog;
