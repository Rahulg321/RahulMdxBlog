import React from "react";

const timelineItems = [
  {
    year: "2023 — Present",
    title: "Upwork",
    subtitle: "Freelancing",
    description: [
      "Started working on Upwork in December 2023. Initially applied to many different jobs but was not successful until 2024 when I finally got an interview.",
      "Secured first job building a website for an independent sponsor company. Developed other full-stack websites and collaborated with clients in fields like law and investment banking.",
      "Spent a brief time working as a recruiter, taking interviews and reviewing assessments. This experience marked my first time working professionally and provided a transformative learning experience.",
    ],
  },
  {
    year: "2021 — 2024",
    title: "PCTE Group of Institutes",
    subtitle: "Computer Science",
    description: [
      "Got my CS degree from PCTE Group of Institutes in my hometown of Ludhiana. Had the chance to learn from seniors and experienced teachers in data science and web development.",
      "Opened the first computer science club in college named Techno Club, organizing various programming-related events like DSA competitions, hackathons, seminars, and game days.",
      "Leading the team in organizing and planning these events helped me grow as a person and taught me to take on more responsibility.",
    ],
  },
];

export default function JourneyTimeLine() {
  return (
    <div className="mx-auto">
      <div className="relative border-l-2 border-neutral-200 dark:border-neutral-700 py-2">
        {timelineItems.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  item,
}: {
  item: {
    year: string;
    title: string;
    subtitle: string;
    description: string[];
  };
}) {
  return (
    <div className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-neutral-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-neutral-900 dark:bg-neutral-200"></div>
      <time className="mb-1 text-sm font-normal leading-none">{item.year}</time>
      <h3 className="text-lg font-semibold ">{item.title}</h3>
      <p className="mb-4 text-base font-normal ">{item.subtitle}</p>
      {item.description.map((desc, index) => (
        <p key={index} className="mb-4 text-base font-normal">
          {desc}
        </p>
      ))}
    </div>
  );
}
