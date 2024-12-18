"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      {theme === "dark" ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className=" border-none"
        >
          <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="border-none"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
        </Button>
      )}
    </div>
  );
}
