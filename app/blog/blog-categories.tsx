"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

const BlogCategories = () => {
  return (
    <div>
      <Category text="All" />
      <Category text="Personal" />
      <Category text="Tech" />
      <Category text="General" />
    </div>
  );
};

export default BlogCategories;

function Category({ text }: { text: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <Button
      variant={"link"}
      onClick={() => {
        router.push(pathname + "?" + createQueryString("tag", text));
      }}
    >
      {text}
    </Button>
  );
}
