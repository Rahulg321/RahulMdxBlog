import Image from "next/image";
import React from "react";
import Rahul1 from "@/public/personal/Rahul1.jpg";
import Rahul2 from "@/public/personal/Rahul2.jpg";
import Rahul3 from "@/public/personal/Rahul3.jpg";
import Rahul4 from "@/public/personal/Rahul4.jpg";
import Rahul6 from "@/public/personal/Rahul6.jpg";
import Rahul7 from "@/public/personal/Rahul7.jpg";
import Rahul8 from "@/public/personal/Rahul8.jpg";
import Rahul9 from "@/public/personal/Rahul9.jpg";
import Rahul10 from "@/public/personal/Rahul10.jpg";

const PhotoGrid = () => {
  return (
    <div className="blog-index">
      <Image
        src={Rahul1}
        priority
        alt="me riding a bike through the mountains"
        className="rounded-lg"
      />

      <Image
        src={Rahul2}
        priority
        alt="me trying my best at photography"
        className="rounded-lg"
      />
      <Image
        src={Rahul4}
        priority
        alt="me a giving the introductory session at my college hackathon"
        className="rounded-lg"
      />
      {/* <Image
        src={Rahul6}
        priority
        alt="bike riding through the mountains"
        className="rounded-lg"
      /> */}
      <Image
        src={Rahul3}
        priority
        alt="Rahul posing for a pic wearing a suit"
        className="rounded-lg"
      />
      {/* <Image
        src={Rahul7}
        priority
        alt="me sitting on my bike posing for a pic"
        className="rounded-lg"
      /> */}
      <Image
        src={Rahul8}
        priority
        alt="me sitting on my bike posing for a pic"
        className="rounded-lg"
      />
      <Image
        src={Rahul9}
        priority
        alt="me sitting on my bike posing for a pic"
        className="rounded-lg"
      />
      <Image
        src={Rahul10}
        priority
        alt="me sitting on my bike posing for a pic"
        className="rounded-lg"
      />
    </div>
  );
};

export default PhotoGrid;
