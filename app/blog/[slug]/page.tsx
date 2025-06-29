import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../utils";
import { CustomMDX } from "@/components/mdx";
import { baseUrl } from "@/app/sitemap";
import { CircleIndicator } from "@/components/CircleIndicator";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  return {
    title: `${post?.metadata.title ?? "Blog"}`,
    description: `${post?.metadata.summary ?? "Blog"}`,
  };
}

export default async function Blog(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="narrow-container block-space-mini">
      <CircleIndicator />

      <h1 className="title text-2xl font-semibold tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="mb-8 mt-2 flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
