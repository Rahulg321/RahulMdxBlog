import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export async function getBase64ImageUrl(imageUrl: string) {
  // fetch image and convert it to base64

  return `data:image/jpeg;base64`;
}



// export const getPlaceholderForRemoteImage = async (url: string) => {
//   try {
//     let res = await fetch(url);
//     if (!res.ok) {
//       throw new Error("Image not found");
//     }
//     let buffer = await res.arrayBuffer();
//     let { base64 } = await getPlaiceholder(Buffer.from(buffer));
//     console.log(base64);
//     return base64;
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error(error.message);
//       console.log(error.stack, error.message);
//     }
//   }
// };
