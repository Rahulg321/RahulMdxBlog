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
        <section className="custom-container mt-4">
            <h2 className="text-left">Read my blog</h2>
            <div className="my-4">
                <Suspense>
                    <BlogCategories />
                </Suspense>
            </div>
            <div className="px-4">
                {allBlogs
                    .sort((a, b) => {
                        if (
                            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
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
    date: string
    title: string
    subtitle: string
    slug: string
}

const BlogCard: React.FC<BlogCardProps> = ({ date, title, subtitle, slug }) => {
    return (
        <article className="mb-8 border-b border-gray-200 dark:border-b dark:border-gray-600 pb-4">
            <Link href={`/blog/${slug}`}>
                <time className="text-xs  mb-1 block">{date}</time>
                <h2 className="text-lg font-medium mb-1">{title}</h2>
                <span className="text-sm text-muted-foreground">{subtitle}</span>
            </Link>
        </article>
    )
}
