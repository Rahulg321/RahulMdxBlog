// components/LoadingSpinner.jsx

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSpinner = () => {
  return (
    <div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>

      <div className="space-y-4 mt-6 md:mt-8 lg:mt-12">
        <div className="gap-4 flex flex-col md:flex-row">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="gap-4 flex ">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="gap-4 flex ">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="gap-4 flex ">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="gap-4 flex ">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
