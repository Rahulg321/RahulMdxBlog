"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement | null>(null);
  const path = usePathname();

  useGSAP(
    () => {
      // gsap code here...
      gsap.fromTo(
        ".container1",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        }
      ); // <-- automatically reverted
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="container1">{children}</div>
    </div>
  );
}
