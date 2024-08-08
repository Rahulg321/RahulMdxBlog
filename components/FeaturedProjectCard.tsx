import { Link2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { FaGithub } from "react-icons/fa6";
import SocialMediaLink from "./SocialMediaLink";

function FeaturedProjectCard({
  heading,
  description,
  githubLink,
  websiteLink,
  status = "completed",
}: {
  heading: string;
  description: string;
  githubLink?: string;
  websiteLink?: string;
  status?: "completed" | "pending";
}) {
  return (
    <div className="p-4 hover:bg-muted w-full flex justify-between items-center rounded-lg">
      <div className="space-y-2">
        <h4>{heading}</h4>
        <span className="text-muted-foreground block">{description}</span>
        {status === "completed" ? (
          <Badge className="block w-fit bg-green-600 hover:bg-green-800 dark:hover:bg-green-400">
            Completed
          </Badge>
        ) : (
          <Badge variant={"destructive"} className="block w-fit">
            Pending
          </Badge>
        )}
      </div>
      <div className="flex gap-2 items-center">
        {githubLink && (
          <SocialMediaLink icon={<FaGithub />} link={githubLink} />
        )}
        {websiteLink && <SocialMediaLink icon={<Link2 />} link={websiteLink} />}
      </div>
    </div>
  );
}

export default FeaturedProjectCard;
