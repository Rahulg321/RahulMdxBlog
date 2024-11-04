import Image from "next/image";
import React from "react";
import Rahul1 from "@/public/personal/Rahul1.jpg";
import Rahul2 from "@/public/personal/Rahul2.jpg";
import Rahul3 from "@/public/personal/Rahul3.jpg";
import Rahul4 from "@/public/personal/Rahul4.jpg";
import Rahul8 from "@/public/personal/Rahul8.jpg";
import Rahul9 from "@/public/personal/Rahul9.jpg";
import Rahul10 from "@/public/personal/Rahul10.jpg";
import BentoGridImageLayout from "../BentoGridImageLayout";

const PhotoGrid = () => {
  return (
    <div>
      <BentoGridImageLayout
        images={[
          {
            src: "/personal/Rahul1.jpg",
            alt: "me riding a bike through the mountains",
          },
          {
            src: "/personal/Rahul2.jpg",
            alt: "me trying my best at photography",
          },
          {
            src: "/personal/Rahul4.jpg",
            alt: "me a giving the introductory session at my college hackathon",
          },
          {
            src: "/personal/Rahul3.jpg",
            alt: "Rahul posing for a pic wearing a suit",
          },
          {
            src: "/personal/Rahul8.jpg",
            alt: "me sitting on my bike posing for a pic",
          },
          {
            src: "/personal/Rahul9.jpg",
            alt: "me sitting on my bike posing for a pic",
          },
          {
            src: "/personal/Rahul10.jpg",
            alt: "me sitting on my bike posing for a pic",
          },
        ]}
      />
    </div>
  );
};

export default PhotoGrid;
