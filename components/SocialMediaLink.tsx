import Link from "next/link";

export default function SocialMediaLink({
  icon,
  link,
}: {
  icon: any;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="text-2xl text-muted-foreground hover:text-black transition duration-300 ease-in-out dark:hover:text-gray-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
}
