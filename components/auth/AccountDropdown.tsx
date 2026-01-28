"use client";

import {
  User2Icon,
  LogInIcon,
  UserPlusIcon,
  LogOutIcon,
  Trash2Icon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useAuth } from "./AuthContext";
import DeleteAccountDialog from "./DeleteAccountDialog";
import { useState } from "react";

function AccountDropdown() {
  const { isAuthenticated, logout } = useAuth();

  const [deleteAccountDialog, setDeleteAccountDialog] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            className={`rounded-full ${isAuthenticated ? "bg-orange-500" : ""} p-1`}
          >
            <User2Icon />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={10}>
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-preset-8!">
              My Account
            </DropdownMenuLabel>
            {!isAuthenticated ? (
              <>
                <DropdownMenuItem className="text-preset-9 flex items-center gap-2">
                  <LogInIcon size={16} />
                  <Link href={"/auth/login"} className="w-full">
                    Sign in to your account
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-preset-9 flex items-center gap-2">
                  <UserPlusIcon size={16} />
                  <Link href={"/auth/sign-up"} className="w-full">
                    Create an account
                  </Link>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <button className="w-full" onClick={async () => await logout()}>
                  <DropdownMenuItem className="text-preset-9! flex cursor-pointer items-center gap-2">
                    <LogOutIcon size={16} />
                    Log out
                  </DropdownMenuItem>
                </button>
                <button
                  className="w-full"
                  onClick={() => setDeleteAccountDialog(true)}
                >
                  <DropdownMenuItem className="text-preset-9! text-destructive focus:text-destructive flex cursor-pointer items-center gap-2">
                    <Trash2Icon size={16} className="text-destructive" />
                    Delete account
                  </DropdownMenuItem>
                </button>
              </>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteAccountDialog
        deleteAccountDialog={deleteAccountDialog}
        setDeleteAccountDialog={setDeleteAccountDialog}
      />
    </>
  );
}

export default AccountDropdown;
