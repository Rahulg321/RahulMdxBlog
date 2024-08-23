function IconBadge({ icon, tag }: { icon: any; tag: string }) {
  return (
    <span className="inline-flex h-full bg-neutral-200 dark:bg-neutral-600 animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-300 dark:border-gray-800 bg-[linear-gradient(110deg,#f0f0f0,45%,#ffffff,55%,#f0f0f0)] dark:bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-300">
      {icon}
      {tag}
    </span>
  );
}

export default IconBadge;
