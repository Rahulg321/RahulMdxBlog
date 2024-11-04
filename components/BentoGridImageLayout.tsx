"use client";

import { KeyboardEvent, useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Cross } from "lucide-react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

type ImageItem = {
  src: string;
  alt: string;
};

const BentoGridImageLayout = ({ images }: { images: ImageItem[] }) => {
  const [openImage, setOpenImage] = useState<string | null>(null);

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
    <div className="blog-index mt-4">
      {images.map((e, index) => {
        const isLandscape = index % 2 === 0;
        const width = isLandscape ? 800 : 600;
        const height = isLandscape ? 600 : 800;
        return (
          <div key={index} className="relative">
            <Image
              src={e.src}
              alt={e.alt}
              className={cn(
                "cursor-pointer rounded-lg transition-all duration-300 ease-in-out", // Always applied
                {
                  "opacity-100": openImage !== e.src, // Normal opacity when not expanded
                  "opacity-50": openImage && openImage !== e.src, // Dim other images when one is expanded
                },
              )}
              width={width}
              height={height}
              onClick={() => imageClickHandler(e.src)}
            />
          </div>
        );
      })}

      {/* Fullscreen Image */}
      {openImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          // @ts-ignore
          className={cn(
            "bg-red fixed inset-0 z-40 flex items-center justify-center overflow-hidden backdrop-blur-md",
          )}
        >
          <div
            className="absolute right-4 top-4 z-50 cursor-pointer rounded-full bg-neutral-900/80 p-2 text-white"
            onClick={closeImageHandler}
          >
            <Cross1Icon className="size-4 md:size-8" />
          </div>
          <Image
            src={openImage}
            alt="Fullscreen image"
            fill
            className="h-full w-full object-contain"
          />
        </motion.div>
      )}
    </div>
  );
};

export default BentoGridImageLayout;
