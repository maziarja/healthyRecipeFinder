import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function RecipeFormSkeleton() {
  return (
    <Card className="bg-background mx-auto mt-4 max-w-2xl border-0 shadow-none lg:max-w-4xl">
      {/* Header */}
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-6 rounded-md" />
          <Skeleton className="h-5 w-40" />
        </div>
        <Skeleton className="h-4 w-64" />
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-11.75 w-full rounded-md" />
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-16 w-full rounded-md" />
        </div>

        {/* Ingredients */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-16 w-full rounded-md" />
        </div>

        {/* Instructions */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-16 w-full rounded-md" />
        </div>

        {/* Serving / Prep / Cook */}
        <div className="flex flex-col gap-6 md:flex-row">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-full space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          ))}
        </div>

        {/* Image upload */}
        <div className="space-y-3">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-12 w-full rounded-md" />
        </div>

        {/* Image preview */}
        <Skeleton className="h-64 w-full rounded-xl" />

        {/* Submit button */}
        <Skeleton className="h-11 w-full rounded-md" />
      </CardContent>
    </Card>
  );
}
