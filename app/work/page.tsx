import { TimelineDemo } from "@/components/PersonalTimeline";
import JourneyTimeLine from "@/components/ScrollRevealTimeline";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function WorkPage() {
  return (
    <section className="narrow-container block-space-mini">
      <h2 className="text-left">Work</h2>
      <div className="mt-4 md:mt-8 lg:mt-12">
        <TimelineDemo />
      </div>
    </section>
  );
}
