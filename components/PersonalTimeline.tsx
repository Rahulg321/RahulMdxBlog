import Image from "next/image";
import React from "react";

export function TimelineDemo() {
  const data = [
    {
      title: "2021 — 2024",
      content: (
        <div>
          <p className="mb-4 font-normal text-neutral-700 dark:text-neutral-300">
            Started working on Upwork in December 2023. Initially applied to
            many different jobs but was not successful until 2024 when I finally
            got an interview.
          </p>
          <p className="mb-4 font-normal text-neutral-700 dark:text-neutral-300">
            Secured first job building a website for an independent sponsor
            company. Developed other full-stack websites and collaborated with
            clients in fields like law and investment banking.
          </p>
          <p className="mb-4 font-normal text-neutral-700 dark:text-neutral-300">
            Spent a brief time working as a recruiter, taking interviews and
            reviewing assessments. This experience marked my first time working
            professionally and provided a transformative learning experience.
          </p>
        </div>
      ),
    },
    {
      title: "2023 — Present",
      content: (
        <div>
          <h2>Upwork</h2>
          <p className="mb-4 font-normal text-neutral-700 dark:text-neutral-300">
            Started working on Upwork in December 2023. Initially applied to
            many different jobs but was not successful until 2024 when I finally
            got an interview.
          </p>
          <p className="mb-4 font-normal text-neutral-700 dark:text-neutral-300">
            Secured first job building a website for an independent sponsor
            company. Developed other full-stack websites and collaborated with
            clients in fields like law and investment banking.
          </p>
          <p className="mb-4 font-normal text-neutral-700 dark:text-neutral-300">
            Spent a brief time working as a recruiter, taking interviews and
            reviewing assessments. This experience marked my first time working
            professionally and provided a transformative learning experience.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative mx-auto max-w-2xl py-8">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-neutral-200 dark:bg-neutral-700" />
      <ul className="space-y-12">
        {data.map((item, idx) => (
          <li key={idx} className="relative flex items-start">
            {/* Dot */}
            <span className="absolute left-0 top-1 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
            </span>
            <div className="ml-8">
              <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
                {item.title}
              </h3>
              <div className="mt-2">{item.content}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
