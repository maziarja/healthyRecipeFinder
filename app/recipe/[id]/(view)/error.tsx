"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function Error({ error }: { error: Error }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-preset-3 text-neutral-900">
        Oops, something went wrong
      </h1>

      <p className="text-preset-9 max-w-md text-neutral-600">
        We could n&apos;t load this recipe right now. It might have been
        removed, or something unexpected happened.
      </p>

      {process.env.NODE_ENV === "development" && (
        <pre className="mt-2 max-w-full overflow-auto rounded-md bg-neutral-100 p-3 text-left text-sm text-neutral-600">
          {error.message}
        </pre>
      )}

      <div className="mt-4 flex gap-3">
        <Button asChild variant="secondary" className="rounded-full">
          <Link href="/">Go Home</Link>
        </Button>

        <Button
          onClick={() => window.location.reload()}
          className="rounded-full"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}

export default Error;
