import Image from "next/image";
import React from "react";
import { Timeline } from "./21dev/timeline";

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
    <div className="">
      <div className="left-0 top-0 -z-50 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
