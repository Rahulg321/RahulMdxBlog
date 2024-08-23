import React from "react";
import { cn } from "@/lib/utils";

interface HeadingShineProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  children: React.ReactNode;
  className?: string;
}

const HeadingShine: React.FC<HeadingShineProps> = ({
  as: Component = "span",
  children,
  className,
}) => {
  return (
    <Component
      className={cn(
        "inline-flex animate-background-shine text-black dark:text-white bg-clip-text text-transparent",
        "bg-[linear-gradient(110deg,#cbcbcb,45%,#f1f5f9,55%,#cbcbcb)]",
        "bg-[length:250%_100%]",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default HeadingShine;
