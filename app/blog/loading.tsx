import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSpinner = () => {
  return (
    <section className="narrow-container block-space-mini">
      <h2 className="text-left">Read my blog</h2>
      <div className="my-4">
        {/* Categories skeleton */}
        <div className="flex gap-6">
          <Skeleton className="h-5 w-10" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-12" />
          <Skeleton className="h-5 w-16" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <article
            key={i}
            className="rounded-xl border-b-2 bg-background/80 p-5"
          >
            <Skeleton className="mb-2 h-6 w-2/3" />
            <Skeleton className="h-4 w-24" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default LoadingSpinner;
