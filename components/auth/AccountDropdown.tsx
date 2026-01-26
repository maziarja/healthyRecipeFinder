"use client";

import { User2Icon } from "lucide-react";
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

function AccountDropdown() {
  const { isAuthenticated, logout } = useAuth();

  return (
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
              <DropdownMenuItem>
                <Link href={"/auth/login"} className="text-preset-9 w-full">
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/auth/sign-up"} className="text-preset-9 w-full">
                  Sign up
                </Link>
              </DropdownMenuItem>
            </>
          ) : (
            <button className="w-full" onClick={async () => await logout()}>
              <DropdownMenuItem className="text-preset-9! cursor-pointer">
                Logout
              </DropdownMenuItem>
            </button>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccountDropdown;
