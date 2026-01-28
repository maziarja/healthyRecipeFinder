"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function Error() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-preset-3 text-neutral-900">
        This shared recipe is no longer available
      </h1>

      <p className="text-preset-9 max-w-md text-neutral-600">
        The owner may have stopped sharing this recipe, or the link has expired.
      </p>

      <div className="mt-4 flex gap-3">
        <Button asChild variant="secondary" className="rounded-full">
          <Link href="/">Go Home</Link>
        </Button>

        <Button asChild className="rounded-full">
          <Link href="/recipes">Browse Recipes</Link>
        </Button>
      </div>
    </div>
  );
}

export default Error;
