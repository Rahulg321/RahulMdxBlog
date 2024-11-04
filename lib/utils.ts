import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
