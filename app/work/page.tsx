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
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a quest to working in Big Tech and building interesting and helpful
          projects along the way along with building meaningful connections.
          Here&apos;s a summary of my work so far
        </p>
        <h2 className="mb-1 tracking-tighter">Upwork</h2>
        <span className="text-neutral-600 block dark:text-neutral-400 text-sm">
          Freelancing
        </span>
        <span className="text-neutral-600 dark:text-neutral-400 text-sm">
          2023 — Present
        </span>
        <p>
          I started working on Upwork in December 2023. Initially, I applied to
          many different jobs but was not successful until 2024 when I finally
          got an interview. From there, I secured my first job, building a
          website for an independent sponsor company. Following that, I
          developed other full-stack websites and collaborated with clients in
          fields like law and investment banking.
        </p>
        <p>
          I also spent a brief time working as a recruiter, taking interviews
          and reviewing assessments. Overall, this experience marked my first
          time working professionally and provided me with a transformative
          learning experience.
        </p>
        <h2 className="mb-1 tracking-tighter">PCTE Group of Institutes</h2>
        <span className="text-neutral-600 block dark:text-neutral-400 text-sm">
          Computer Science
        </span>
        <span className="text-neutral-600 dark:text-neutral-400 text-sm">
          2021 — 2024
        </span>
        <p>
          I got my CS degree from PCTE Group of Institutes in my hometown of
          Ludhiana. There, I had the chance to learn from my seniors and some of
          the most experienced teachers in the fields of data science and web
          development. I opened the first computer science club in my college
          named Techno Club, where my friends and I organized various
          programming-related events like DSA competitions, multiple hackathons,
          seminars, and game days.
        </p>
        <p>
          Leading the team in organizing and planning these events helped me
          grow as a person and taught me to take on more responsibility.
        </p>
      </div>
    </section>
  );
}
