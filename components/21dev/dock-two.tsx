"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DockProps {
  className?: string;
  items: {
    icon: LucideIcon;
    label: string;
    onClick?: () => void;
  }[];
}

interface DockIconButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  className?: string;
}

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
  ({ icon: Icon, label, onClick, className }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
          "flex-1 md:flex-none lg:md:flex-none lg:flex-1",
          "group relative rounded-lg p-3",
          "transition-colors hover:bg-secondary",
          className,
        )}
      >
        <Icon className="h-5 w-5 text-foreground" />
        <span
          className={cn(
            "pointer-events-none absolute whitespace-nowrap rounded bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 transition-opacity group-hover:opacity-100",
            "-top-8 left-1/2 -translate-x-1/2",
            "md:-top-0 md:left-full md:top-1/2 md:ml-2 md:-translate-x-0 md:-translate-y-1/2",
          )}
        >
          {label}
        </span>
      </motion.button>
    );
  },
);
DockIconButton.displayName = "DockIconButton";

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className }, ref) => {
    return (
      <div ref={ref} className="flex w-full items-center justify-center">
        <div className="relative flex w-full max-w-4xl items-center justify-center rounded-2xl">
          <motion.div
            initial="initial"
            animate="animate"
            className={cn(
              "flex items-center gap-1 rounded-2xl p-2",
              "w-full justify-between lg:w-auto lg:justify-center",
              "border shadow-lg backdrop-blur-lg",
              "border-border bg-background/90",
              "transition-shadow duration-300 hover:shadow-xl",
              className,
            )}
          >
            {items.map((item) => (
              <DockIconButton key={item.label} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    );
  },
);
Dock.displayName = "Dock";

export { Dock };
