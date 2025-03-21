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
        <section className="container mb-4">

            {/* <JourneyTimeLine /> */}
            <TimelineDemo />
        </section>
    );
}
