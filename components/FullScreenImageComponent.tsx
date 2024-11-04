"use client";

import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { motion } from "framer-motion";

type ImageItem = {
  src: string;
  alt: string;
};

const FullScreenImageComponent = ({ img }: { img: ImageItem }) => {
  const { src, alt } = img;

  const [openImage, setOpenImage] = React.useState<string | null>(null);

  const imageClickHandler = (src: string) => {
    setOpenImage(src);
  };

  const closeImageHandler = () => {
    setOpenImage(null);
  };

  useEffect(() => {
    const handleKeyPress = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        closeImageHandler();
      }
    };

    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <div className="aspect-h-3 aspect-w-4 relative mt-4">
        <Image
          src={src}
          alt={alt}
          className={cn(
            "cursor-pointer rounded-xl transition-all duration-300 ease-in-out", // Always applied
            {
              "opacity-100": openImage !== src, // Normal opacity when not expanded
              "opacity-50": openImage && openImage !== src, // Dim image when one is expanded
            },
          )}
          fill
          onClick={() => imageClickHandler(src)}
        />
      </div>
      {/* Fullscreen Image */}
      {openImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          // @ts-ignore
          className="bg-red fixed inset-0 z-40 flex items-center justify-center overflow-hidden backdrop-blur-md"
        >
          <div
            className="absolute right-4 top-4 z-50 cursor-pointer rounded-full bg-neutral-900/80 p-2 text-white"
            onClick={closeImageHandler}
          >
            <Cross1Icon className="size-4 md:size-8" />
          </div>
          <Image
            src={openImage}
            fill
            alt="Fullscreen image"
            className="h-full w-full object-contain"
          />
        </motion.div>
      )}
    </div>
  );
};

export default FullScreenImageComponent;
