"use client";

import { deleteAccount } from "@/app/_actions/auth/deleteAccount";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";

type Props = {
  deleteAccountDialog: boolean;
  setDeleteAccountDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

function DeleteAccountDialog({
  deleteAccountDialog,
  setDeleteAccountDialog,
}: Props) {
  const router = useRouter();
  const { refreshSession } = useAuth();
  async function handleDeleteAccount() {
    const result = await deleteAccount();
    if (result.success) {
      await refreshSession();
      router.push("/");
    }
  }

  return (
    <AlertDialog
      onOpenChange={setDeleteAccountDialog}
      open={deleteAccountDialog}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-destructive">
            Delete your account?
          </AlertDialogTitle>
          <AlertDialogDescription className="space-y-2">
            <span>
              This action is <strong>permanent</strong> and cannot be undone.
            </span>
            <span className="block">
              All your recipes, saved data, and account information will be
              permanently removed.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteAccount}
            variant={"destructive"}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Yes, delete my account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteAccountDialog;
