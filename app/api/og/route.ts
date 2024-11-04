/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck

import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";

export const runtime = "edge";
// export async function GET() {
//   // Font
//   const interSemiBold = fetch(
//     new URL("./Inter-SemiBold.ttf", import.meta.url)
//   ).then((res) => res.arrayBuffer());

//   const logoSrc = await fetch(new URL("./main-bg.png", import.meta.url)).then(
//     (res) => res.arrayBuffer()
//   );

//   return new ImageResponse(<div></div>, {});
// }

export async function GET() {
  return NextResponse.json({ message: "Hello, World!" });
}
