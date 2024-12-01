import React, { Suspense } from "react";
import { formatDate, getBlogPosts, getBlogPostsWithCategory } from "./utils";
import Link from "next/link";
import { Metadata } from "next";
import BlogCategories from "./blog-categories";

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
    <section>
      <h2 className="text-left">Read my blog</h2>
      <div className="my-4">
        <Suspense>
          <BlogCategories />
        </Suspense>
      </div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="mb-4 flex flex-col space-y-1 rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-muted"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col items-start space-x-0 md:flex-row md:space-x-4">
              <span className="text-md text-base font-medium text-neutral-900 dark:text-neutral-100">
                {post.metadata.title}
              </span>
            </div>
          </Link>
        ))}
    </section>
  );
};

export default BlogsPage;
