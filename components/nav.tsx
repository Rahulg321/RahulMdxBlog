"use client";

import Link from "next/link";
import { ModeToggle } from "./Mode-Toggle";
import { Code, FlaskConical, House, Newspaper } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = {
  "/": {
    name: "home",
    icon: <House className="md:size-6" />,
  },
  "/work": {
    name: "work",
    icon: <Code className="md:size-6" />,
  },
  "/project": {
    name: "project",
    icon: <FlaskConical className="md:size-6" />,
  },
  "/blog": {
    name: "blog",
    icon: <Newspaper className="md:size-6" />,
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:bottom-4">
      <div className="bg-neutral-100 dark:bg-neutral-800 w-full sm:w-fit border px-2 py-1 sm:rounded-lg mx-auto">
        <div className="flex items-center justify-between w-full gap-2">
          {Object.entries(navItems).map(([path, { name, icon }]) => {
            const isActive = pathname === path;
            return (
              <TooltipProvider key={path}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={path}
                      className={cn(
                        "transition-all rounded-lg px-2 py-2",
                        isActive ? "bg-white dark:bg-neutral-700" : ""
                      )}
                    >
                      {icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
