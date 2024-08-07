import { Link2 } from "lucide-react";
import Link from "next/link";

function FeaturedProjectCard({
  heading,
  description,
  link,
}: {
  heading: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      className="p-4 hover:bg-muted w-full flex justify-between items-center rounded-lg"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <h4>{heading}</h4>
        <span className="text-muted-foreground">{description}</span>
      </div>
      <Link2 />
    </Link>
  );
}

export default FeaturedProjectCard;
