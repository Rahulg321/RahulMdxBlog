/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck

import { ImageResponse } from "next/og";
import { getBlogPosts } from "../utils";

export const runtime = "edge";

// Image metadata
export const alt =
  "Read my blog and learn about topics like blockchain, web dev, health and more";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  // Font
  const interSemiBold = fetch(new URL("./GeistVF.woff", import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );

  const logoSrc = await fetch(new URL("./main-bg.png", import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );

  let post = getBlogPosts().find((post) => post.slug === params.slug);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="flex flex-col relative w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8 bg-gray-50 bg-opacity-80">
          <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
            <span>{post.title}</span>
            <span tw="text-indigo-600">{post?.metadata.summary}</span>
          </h2>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
