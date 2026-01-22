"use client";

import { UtensilsCrossedIcon, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

function EmptyRecipes() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams.toString());

  function deleteAllFilters() {
    params.delete("prepTime");
    params.delete("cookingTime");
    params.delete("query");
    params.delete("page");
    const query = params.toString();
    router.push(`/recipes?${query}`, { scroll: false });
  }

  const hasFilters =
    searchParams.get("prepTime") ||
    searchParams.get("cookingTime") ||
    searchParams.get("query");

  return (
    <div className="col-span-full flex flex-col items-center justify-center space-y-8 py-16 text-center md:py-24 lg:py-32">
      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <div className="rounded-full bg-neutral-200 p-6 md:p-8">
            <svg
              className="h-16 w-16 text-neutral-300 md:h-16 md:w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <UtensilsCrossedIcon />
            </svg>
          </div>
        </div>
        <h3 className="text-preset-3 text-neutral-900">No recipes found</h3>
        <p className="text-preset-6 mx-auto max-w-md text-neutral-600">
          We couldn&apos;t find any recipes matching your search criteria. Try
          adjusting your filters or search query to discover more delicious
          options.
        </p>
      </div>
      {hasFilters && (
        <Button
          onClick={deleteAllFilters}
          variant="outline"
          size="lg"
          className="cursor-pointer gap-2 rounded-full"
        >
          <X className="h-4 w-4" />
          <span className="text-preset-8">Clear all filters</span>
        </Button>
      )}
    </div>
  );
}

export default EmptyRecipes;
