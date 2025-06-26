import React from "react";
import { Tilt } from "@/components/21dev/tilt";
import Image from "next/image";

const BookPage = () => {
  return (
    <div className="custom-container mt-4 md:mt-6 lg:mt-8">
      <h1 className="">Books I&apos;ve Read</h1>
      <div className="mx-auto mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <BasicTiltCard
          img="/books/naval.jpeg"
          title="The Alamanack of Naval Ravikant"
          author="Naval Ravikant"
          alt="The-Alamanack-of-Naval-Ravikant"
        />
        <BasicTiltCard
          img="/books/ody1.jpg"
          title="The Illiad and The Odyssey"
          author="Homer"
          alt="The-Illiad-and-The-Odyssey"
        />
        <BasicTiltCard
          img="/books/as1.jpg"
          title="A Song Of Ice and Fire"
          author="George RR Martin"
          alt="A-Song-Of-Ice-and-Fire"
        />
        <BasicTiltCard
          img="/books/zahir.webp"
          title="The Zahir"
          author="Paulo Coelho"
          alt="the-zahir"
        />
      </div>
    </div>
  );
};

export default BookPage;

function BasicTiltCard({
  img,
  alt,
  title,
  author,
}: {
  img: string;
  alt: string;
  title: string;
  author: string;
}) {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: "12px",
        }}
        className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <div className="aspect-h-1 aspect-w-1 relative">
          <Image src={img} alt={alt} fill className="object-cover" />
        </div>
        <div className="p-2">
          <h1 className="font-mono leading-snug text-zinc-950 dark:text-zinc-50">
            {title}
          </h1>
          <span className="text-zinc-700 dark:text-zinc-400">{author}</span>
        </div>
      </div>
    </Tilt>
  );
}
