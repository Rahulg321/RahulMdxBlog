import JourneyTimeLine from "@/components/ScrollRevealTimeline";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="mb-8 tracking-tighter">my work</h1>
      <JourneyTimeLine />
    </section>
  );
}
