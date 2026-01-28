import Link from "next/link";
import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-preset-3 text-neutral-900">Page not found</h1>

      <p className="text-preset-9 max-w-md text-neutral-600">
        The page you&apos;re looking for doesn&apos;t exist, or the recipe may
        have been removed or unshared.
      </p>

      <div className="mt-4 flex gap-3">
        <Button asChild variant="secondary" className="rounded-full">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
