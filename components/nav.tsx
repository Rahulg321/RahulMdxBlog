"use client";

import Link from "next/link";
import { ModeToggle } from "./Mode-Toggle";
import {
  Code,
  FlaskConical,
  House,
  IndianRupee,
  Newspaper,
  Sun,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { Separator } from "./ui/separator";
import { Button, buttonVariants } from "./ui/button";

const DATA = {
  navbar: [
    {
      name: "home",
      icon: <House className="" />,
      href: "/",
    },
    {
      name: "work",
      icon: <Code className="" />,
      href: "/work",
    },
    {
      name: "project",
      icon: <FlaskConical className="" />,
      href: "/project",
    },
    {
      name: "blog",
      icon: <Newspaper className="" />,
      href: "/blog",
    },
  ],
  social: [
    {
      name: "github",
      icon: <FaGithub className="" />,
      href: "https://github.com/Rahulg321?tab=repositories",
    },
    {
      name: "twitter",
      icon: <FaXTwitter className="" />,
      href: "https://x.com/rg5353070",
    },
    {
      name: "linkedin",
      icon: <FaLinkedin className="" />,
      href: "https://www.linkedin.com/in/rahul-gupta-86194a213/",
    },
    {
      name: "instagram",
      icon: <FaInstagram className="" />,
      href: "https://www.instagram.com/_rahulgupta321_/",
    },
  ],
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:bottom-4">
      <div className="sm:rounded-lg mx-auto">
        <TooltipProvider>
          <Dock
            direction="bottom"
            className="w-full bg-background sm:w-fit justify-center"
          >
            {Object.entries(DATA.navbar).map(([path, { name, icon, href }]) => {
              const isActive = pathname === path;
              return (
                <DockIcon key={path}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={href}
                        aria-label={`Go to {name}`}
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                            size: "icon",
                          }),
                          "size-6 md:size-8 lg:size-12 rounded-full"
                        )}
                      >
                        {icon}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              );
            })}
          </Dock>
        </TooltipProvider>
      </div>
    </nav>
  );
}
