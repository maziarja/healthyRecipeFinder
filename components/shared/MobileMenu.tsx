"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useAuth } from "../auth/AuthContext";

function MobileMenu({
  onOpenMenu,
}: {
  onOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isAuthenticated } = useAuth();
  const ref = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(e: Event) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onOpenMenu(false);
      }
    }
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [onOpenMenu]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.95 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      ref={ref}
      className="bg-neutral-0 text-preset-7 fixed top-20.5 left-1/2 flex w-[91.5%] -translate-x-1/2 flex-col rounded-lg p-2 capitalize drop-shadow-lg md:top-25.5 md:w-[94%]"
    >
      <Link className="rounded-lg px-2 py-3" href={"/"}>
        Home
      </Link>
      <Link className="rounded-lg px-2 py-3" href={"/about"}>
        about
      </Link>
      <Link className="rounded-lg px-2 py-3" href={"/recipes"}>
        Recipes
      </Link>
      <Button size={"md"} className="mt-2.5">
        <Link
          href={`${isAuthenticated ? "/addRecipe" : "/auth/login"}`}
          className="text-preset-5 w-full"
        >
          Add recipes
        </Link>
      </Button>
    </motion.div>
  );
}

export default MobileMenu;
