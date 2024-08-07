function IconBadge({ icon, tag }: { icon: any; tag: string }) {
  return (
    <span className="inline-block px-2 bg-neutral-200 dark:bg-neutral-600 rounded-full">
      {icon}
      {tag}
    </span>
  );
}

export default IconBadge;
