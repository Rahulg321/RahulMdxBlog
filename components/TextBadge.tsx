import React from "react";
import { Badge } from "@/components/ui/badge";

const TextBadge = ({ text }: { text: string }) => {
  return <Badge>{text}</Badge>;
};

export default TextBadge;
