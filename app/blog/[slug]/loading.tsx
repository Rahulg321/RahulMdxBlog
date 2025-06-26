// components/LoadingSpinner.jsx

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSpinner = () => {
  return (
    <div className="narrow-container block-space">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="mt-4 flex flex-col space-y-3 md:md:mt-8">
        <div className="space-y-4">
          <Skeleton className="h-[125px] w-full rounded-xl" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>

          <Skeleton className="h-[125px] w-full rounded-xl" />

          <Skeleton className="h-[125px] w-full rounded-xl" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[60%]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[60%]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[60%]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
