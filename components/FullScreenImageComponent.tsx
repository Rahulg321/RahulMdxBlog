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
      <motion.div className="relative aspect-w-4 aspect-h-3 mt-4">
        <Image
          src={src}
          alt={alt}
          className={cn(
            "rounded-xl cursor-pointer transition-all duration-300 ease-in-out", // Always applied
            {
              "opacity-100": openImage !== src, // Normal opacity when not expanded
              "opacity-50": openImage && openImage !== src, // Dim image when one is expanded
            }
          )}
          fill
          onClick={() => imageClickHandler(src)}
        />
      </motion.div>
      {/* Fullscreen Image */}
      {openImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-red overflow-hidden backdrop-blur-md"
        >
          <div
            className="absolute top-4 z-50 right-4 text-white bg-neutral-900/80 p-2 rounded-full cursor-pointer"
            onClick={closeImageHandler}
          >
            <Cross1Icon className="size-4 md:size-8" />
          </div>
          <Image
            src={openImage}
            fill
            alt="Fullscreen image"
            className="w-full h-full object-contain"
          />
        </motion.div>
      )}
    </div>
  );
};

export default FullScreenImageComponent;
