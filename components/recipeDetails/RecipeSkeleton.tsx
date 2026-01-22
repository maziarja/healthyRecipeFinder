import { Skeleton } from "@/components/ui/skeleton";

function RecipeSkeleton() {
  return (
    <div className="pb-12 lg:p-0">
      <div className="space-y-4">
        {/* Breadcrumb Skeleton */}
        <Skeleton className="h-6 w-48" />

        {/* Main Content Grid */}
        <div className="grid gap-10 lg:grid-cols-[580px_1fr]">
          {/* Image Skeleton */}
          <div className="relative aspect-square lg:max-h-145 lg:max-w-145">
            <Skeleton className="h-full w-full rounded-[10px]" />
          </div>

          {/* Content Skeleton */}
          <div className="space-y-5">
            {/* Title Skeleton */}
            <Skeleton className="h-12 w-full md:h-14" />

            {/* Overview Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
              <Skeleton className="h-5 w-4/6" />
            </div>

            {/* RecipeMeta Skeleton */}
            <div className="flex flex-wrap gap-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-28" />
              <Skeleton className="h-6 w-28" />
            </div>

            {/* Ingredients Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-8 w-40" />
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-5 w-full" />
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-8 w-40" />
              <div className="space-y-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Skeleton className="mt-1 h-6 w-6 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-4/5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeSkeleton;
