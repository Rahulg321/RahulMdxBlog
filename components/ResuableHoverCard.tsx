import React from "react";
import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const ReusableHoverCard = ({
  trigger,
  heading,
  description,
  imageLink,
  fallBackText,
  footerText,
}: {
  trigger: string;
  heading: string;
  fallBackText: string;
  description: string;
  footerText: string;
  imageLink?: string;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger className="underline cursor-pointer">
        {trigger}
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage
              src={imageLink ? imageLink : "https://github.com/Rahulg321.png"}
            />
            <AvatarFallback>{fallBackText}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <span className="text-sm font-semibold">{heading}</span>
            <p className="text-sm">{description}</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {footerText}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ReusableHoverCard;
