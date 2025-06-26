import React, { Suspense } from "react";
import { formatDate, getBlogPosts, getBlogPostsWithCategory } from "./utils";
import Link from "next/link";
import { Metadata } from "next";
import BlogCategories from "./blog-categories";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my blog and learn about topics like blockchain, web dev, health and more",
};

// After
type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const BlogsPage = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;
  const tag = searchParams.tag;
  console.log("Tag", tag);

  let allBlogs;

  if (tag && tag !== "All" && tag !== "") {
    allBlogs = getBlogPostsWithCategory(tag as string);
  } else if (tag === "All" || tag === "" || !tag) {
    allBlogs = getBlogPosts();
  } else {
    allBlogs = getBlogPosts();
  }

  return (
    <section className="narrow-container block-space-mini">
      <h2 className="text-left">Read my blog</h2>
      <div className="my-4">
        <Suspense>
          <BlogCategories />
        </Suspense>
      </div>
      <div className="flex flex-col gap-4">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, index) => (
            <BlogCard
              key={index}
              date={formatDate(post.metadata.publishedAt)}
              title={post.metadata.title}
              subtitle={post.metadata.summary}
              slug={post.slug}
            />
          ))}
      </div>
    </section>
  );
};

export default BlogsPage;

interface BlogCardProps {
  date: string;
  title: string;
  subtitle: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ date, title, slug }) => {
  return (
    <article className="rounded-xl border-b-2 bg-background/80 p-5 transition-shadow duration-200 hover:shadow-lg">
      <Link href={`/blog/${slug}`} className="block">
        <h2 className="mb-1 text-lg font-semibold">{title}</h2>
        <div className="text-xs text-muted-foreground">{date}</div>
      </Link>
    </article>
  );
};
