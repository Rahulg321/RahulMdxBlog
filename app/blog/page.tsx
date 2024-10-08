import React from "react";
import { formatDate, getBlogPosts } from "./utils";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my blog and learn about topics like blockchain, web dev, health and more",
};

const page = () => {
  let allBlogs = getBlogPosts();
  console.log("is this real");
  return (
    <section>
      <h2 className="mb-8 text-center md:text-left">Read my blog</h2>
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
            className="flex flex-col space-y-1 mb-4 hover:bg-muted px-4 py-2 transition duration-300 ease-in-out  rounded-lg"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-4 items-center">
              <p className="text-neutral-600 dark:text-neutral-400 ">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <span className="text-neutral-900 text-base text-md font-medium dark:text-neutral-100 ">
                {post.metadata.title}
              </span>
            </div>
          </Link>
        ))}
    </section>
  );
};

export default page;
