import { CustomMDX } from "@/components/mdx";
import { formatDate } from "@/app/blog/utils"; // Reusing the date formatter

interface MusingCardProps {
  content: string;
  date: string;
}

export function MusingCard({ content, date }: MusingCardProps) {
  return (
    <div className="mb-8 rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="prose dark:prose-invert max-w-none">
        <CustomMDX source={content} />
      </div>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {formatDate(date)}
      </p>
    </div>
  );
}
