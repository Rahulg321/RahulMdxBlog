import { getBlogPosts } from "./blog/utils";

export const baseUrl = "https://rahulguptadev.in";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = [
    "",
    "/blog",
    "/about",
    "/contact",
    "/project",
    "/work",
    "/resume",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
