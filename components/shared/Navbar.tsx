"use client";
import logo from "@/public/assets/images/logo.svg";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "motion/react";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import AccountDropdown from "../auth/AccountDropdown";
import { useAuth } from "../auth/AuthContext";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  return (
    <>
      <div className="relative z-9 mx-auto max-w-360 p-4 md:px-8 md:pt-8 md:pb-5 lg:py-5 lg:min-[1350px]:px-15">
        <div className="flex items-center justify-between">
          <Image src={logo} alt="Logo" loading="eager" />

          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <AccountDropdown />
            </div>
            <button
              onClick={() => setOpenMenu((prev) => !prev)}
              className="rounded-sm bg-neutral-300 p-3 lg:hidden"
            >
              {!openMenu ? <MenuIcon /> : <XIcon />}
            </button>
          </div>

          <div className="text-preset-7 hidden gap-10 lg:flex">
            <Link
              href={"/"}
              className={`${pathname === "/" ? "border-b-3 border-orange-500" : ""}`}
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className={`${pathname === "/about" ? "border-b-3 border-orange-500" : ""}`}
            >
              about
            </Link>
            <Link
              href={"/recipes"}
              className={`${pathname === "/recipes" ? "border-b-3 border-orange-500" : ""}`}
            >
              Recipes
            </Link>
          </div>
          <div className="hidden items-center gap-8 lg:flex">
            <AccountDropdown />
            <Button size={"md"} className="hidden lg:block">
              <Link
                href={`${isAuthenticated ? "/addRecipe" : "/auth/login"}`}
                className="text-preset-5"
              >
                Add recipes
              </Link>
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {openMenu && <MobileMenu onOpenMenu={setOpenMenu} />}
        </AnimatePresence>
      </div>
      <Separator />
    </>
  );
}

export default Navbar;
