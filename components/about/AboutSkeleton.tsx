import { Skeleton } from "@/components/ui/skeleton";

function AboutSkeleton() {
  return (
    <>
      {/* OurMission Skeleton */}
      <section className="mx-auto grid max-w-314 items-center gap-10 px-4 pt-12 pb-16 md:gap-16 md:px-8 md:pt-16 md:pb-20 lg:grid-cols-2 lg:pt-20 lg:pb-24">
        <div className="space-y-6">
          {/* Badge Skeleton */}
          <Skeleton className="h-7 w-32" />
          {/* Heading Skeleton */}
          <Skeleton className="h-12 w-full md:h-14" />
          {/* Paragraphs Skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/6" />
          </div>
        </div>
        {/* Image Skeleton */}
        <Skeleton className="aspect-square w-full rounded-xl" />
      </section>

      {/* WhyWeExist Skeleton */}
      <section className="mx-auto grid max-w-314 gap-10 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-24">
        {/* Heading Skeleton */}
        <Skeleton className="h-12 w-48 md:h-14" />
        <div className="space-y-6 md:space-y-8 lg:space-y-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-5">
              <Skeleton className="h-6 w-6 shrink-0" />
              <div className="flex-1 space-y-3">
                <Skeleton className="h-8 w-3/4" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-4/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OurFoodPhilosophy Skeleton */}
      <section className="mx-auto grid max-w-314 gap-10 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-24">
        {/* Heading Skeleton */}
        <Skeleton className="h-12 w-56 md:h-14" />
        <div className="space-y-6 md:space-y-8 lg:space-y-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-5">
              <Skeleton className="h-6 w-6 shrink-0" />
              <div className="flex-1 space-y-3">
                <Skeleton className="h-8 w-2/3" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-5/6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BeyondThePlate Skeleton */}
      <section className="mx-auto grid gap-8 px-4 pt-12 md:gap-10 md:px-8 md:pt-20 md:pb-0 lg:max-w-314 lg:grid-cols-[1.5fr_2fr] lg:items-center lg:gap-16 lg:py-24">
        <div className="space-y-5">
          {/* Heading Skeleton */}
          <Skeleton className="h-12 w-56 md:h-14" />
          <div className="space-y-3">
            {/* Paragraph Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
            </div>
            {/* List Items Skeleton */}
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-2">
                  <Skeleton className="h-6 w-6 shrink-0 rounded-full" />
                  <Skeleton className="h-5 flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Image Skeleton */}
        <Skeleton className="aspect-square w-full rounded-xl" />
      </section>

      {/* CallToAction Skeleton */}
      <section className="px-4 pt-16 text-center md:px-8 md:pt-20 lg:mx-auto lg:max-w-314 lg:pt-0">
        <div className="relative space-y-8 overflow-hidden rounded-2xl bg-neutral-200 px-4 py-12 md:space-y-10 md:px-0 md:py-20 lg:py-24">
          <div className="space-y-3">
            {/* Heading Skeleton */}
            <Skeleton className="mx-auto h-12 w-64 md:h-14 md:w-80" />
            {/* Paragraph Skeleton */}
            <Skeleton className="mx-auto h-6 w-80 md:w-96" />
          </div>
          {/* Button Skeleton */}
          <Skeleton className="mx-auto h-12 w-40 rounded-full" />
        </div>
      </section>
    </>
  );
}

export default AboutSkeleton;
