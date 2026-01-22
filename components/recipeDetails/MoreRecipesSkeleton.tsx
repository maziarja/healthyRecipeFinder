import { Skeleton } from "@/components/ui/skeleton";

function MoreRecipesSkeleton() {
  return (
    <div className="space-y-6 pt-12 lg:p-0">
      {/* Title Skeleton */}
      <Skeleton className="h-10 w-48" />

      {/* Recipe Cards Grid Skeleton */}
      <div className="grid gap-8 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <RecipeCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

function RecipeCardSkeleton() {
  return (
    <div className="bg-card border-border flex flex-col gap-4 rounded-[10px] border p-2 shadow-[0_8px_16px_-9px_#163A3429]">
      <div className="space-y-4">
        {/* Image Skeleton */}
        <Skeleton className="h-75 w-full rounded-[10px] md:h-112.5 lg:h-75" />

        <div className="space-y-4 px-2">
          <div className="space-y-2.5">
            {/* Title Skeleton */}
            <Skeleton className="h-6 w-3/4" />
            {/* Overview Skeleton */}
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          {/* RecipeMeta Skeleton */}
          <div className="flex gap-4">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-16" />
          </div>
        </div>
      </div>

      {/* Button Skeleton */}
      <Skeleton className="h-10 w-full rounded-full" />
    </div>
  );
}

export default MoreRecipesSkeleton;
