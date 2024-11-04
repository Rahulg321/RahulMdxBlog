"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import Image from "next/image";

interface HeroImageDialogProps {
  imgSrc: string;
  imgAlt: string;
  height: number;
  width: number;
}

export function HeroImageDialog({
  imgSrc,
  imgAlt,
  height,
  width,
}: HeroImageDialogProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <div className="relative">
      {/* Thumbnail */}
      <div onClick={() => setIsImageOpen(true)} className="cursor-pointer">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={width}
          height={height}
          className="w-full rounded-lg"
        />
      </div>

      {/* Full-screen modal */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative mx-auto w-full max-w-7xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsImageOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-neutral-900/80 p-2 text-white"
              >
                <XIcon className="h-6 w-6" />
              </button>

              {/* Full-screen image */}
              <div className="relative h-[90vh] w-full">
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
