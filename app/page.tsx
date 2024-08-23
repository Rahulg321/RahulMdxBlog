import { NextjsHoverCard } from "@/components/HoverCards/Nextjs";
import PhotoGrid from "@/components/sections/PhotoGrid";
import { ArrowRightIcon, Link2, Link2Off, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { RiNextjsFill } from "react-icons/ri";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import IconBadge from "@/components/IconBadge";
import {
  FaReact,
  FaRust,
  FaTwitter,
  FaUpwork,
  FaXTwitter,
} from "react-icons/fa6";
import { SiSolidity, SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { Metadata } from "next";
import HeadingShine from "@/components/HeadingShine";

export default function Home() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="mb-8">hey, I am Rahul 👋</h2>
        <div className="">
          <p>
            I am a software engineer with a passion for reading books, playing
            badminton, and building communities on platforms like{" "}
            <IconBadge
              icon={<FaXTwitter className="inline mr-2" />}
              tag="Twitter"
            />
            . I love to experiment with new technologies and programming
            languages, constantly seeking to expand my knowledge and skills.
          </p>
          <p>
            Currently, I work part-time at a legal tech firm while also
            freelancing on Upwork, where I build full-stack websites for
            clients. My tech stack includes{" "}
            <IconBadge
              icon={
                <FaReact className="inline mr-2  text-blue-800 dark:text-blue-400" />
              }
              tag="React"
            />
            ,{" "}
            <IconBadge
              icon={<RiNextjsFill className="inline mr-2" />}
              tag="Next.js"
            />
            ,{" "}
            <IconBadge
              icon={<IoLogoFirebase className="inline mr-2 text-yellow-400 " />}
              tag="Firebase"
            />
            , and PostgreSQL. Looking ahead, I plan to delve into web3 and
            explore technologies like{" "}
            <IconBadge
              icon={<SiSolidity className="inline mr-2" />}
              tag="Solidity"
            />{" "}
            and{" "}
            <IconBadge
              icon={
                <FaRust className="inline mr-2 text-yellow-900 dark:text-yellow-700" />
              }
              tag="Rust"
            />
            .
          </p>
          <p>
            I&apos;m focused on fine-tuning my freelancing business, sharing my
            journey online, and enhancing my design skills. I enjoy crafting
            components and experimenting with innovative ideas. If you&apos;d
            like to collaborate, feel free to send me an email.
          </p>
        </div>
      </div>
      <div>
        <PhotoGrid />
      </div>
      <h2 className="mt-12">Featured Projects</h2>
      <p className="">
        Working for my clients on platforms like{" "}
        <IconBadge icon={<FaUpwork className="inline mr-2" />} tag="Upwork" />,
        I have created a variety of projects, ranging from blog sites to
        comprehensive marketing company websites. Below, you can find some of
        the projects I have worked on.
      </p>

      <div className="space-y-4 mt-8">
        <FeaturedProjectCard
          heading="Securities Law Blog"
          websiteLink="https://aigbe-law-blog.vercel.app/"
          githubLink="https://github.com/Rahulg321/Aigbe-Law-Blog"
          description="blog for a private equity firm"
        />
        <FeaturedProjectCard
          heading="Dark Alpha Capital"
          websiteLink="https://darkalphacapital.com/"
          githubLink="https://github.com/Rahulg321/Dark-Alpha"
          description="company website for a private equity firm"
        />
        <FeaturedProjectCard
          heading="Aigbe Law PLLC "
          websiteLink="https://law-offices-of-destiny-aigbe.vercel.app/"
          githubLink="https://github.com/Rahulg321/Law-Offices-of-Destiny-Aigbe"
          description="company website for a law firm built using nextjs and prismic"
        />
        <Link
          href={"/project"}
          className="flex justify-end text-muted-foreground hover:text-foreground  hover:underline transition-all duration-300 ease-in-out items-center gap-2"
        >
          All Projects
        </Link>
      </div>

      <h2 className="mt-12">Featured Blogs</h2>
      <p>
        Over the last year, I&apos;ve written content on my blog and newsletter.
        I try to keep things simple. You&apos;ll find writing about technologies
        I&apos;m interested in at the time, or how I&apos;m learning and growing
        in my career, sharing knowledge along the way.
      </p>

      <div className="space-y-4 mt-12">
        <FeaturedBlogCard
          date="July 15, 2024"
          title="Peer to Peer Networks"
          link="/blog/peer-to-peer"
        />
        <FeaturedBlogCard
          title="Embracing The Grind"
          date="June 21, 2024"
          link="/blog/embracing-the-grind"
        />

        <Link
          href={"/blog"}
          className="flex justify-end text-muted-foreground hover:text-foreground  hover:underline transition-all duration-300 ease-in-out items-center gap-2"
        >
          All Blogs
        </Link>
      </div>

      <h2 className="mt-12">Connect</h2>
      <p className="">
        Connect with me on{" "}
        <Link
          href={"https://x.com/rg5353070"}
          target="_blank"
          rel="noopener noreferrer"
          className="underline "
        >
          Twitter
        </Link>
        , view my code and open-source projects on{" "}
        <Link
          href={"https://github.com/Rahulg321"}
          target="_blank"
          rel="noopener noreferrer"
          className="underline "
        >
          Github
        </Link>
        , explore my{" "}
        <Link
          href={"https://read.cv/rg5353070"}
          target="_blank"
          rel="noopener noreferrer"
          className="underline "
        >
          Read.cv
        </Link>
        , profile or email me directly at rg5353070@gmail.com
      </p>
    </section>
  );
}

function FeaturedBlogCard({
  title,
  link,
  date,
}: {
  title: string;
  link: string;
  date: string;
}) {
  return (
    <Link
      href={link}
      className="rounded-lg border bg-muted p-4 flex justify-between items-center"
    >
      <div>
        <h4>{title}</h4>
        <span className="text-muted-foreground">{date}</span>
      </div>
      <MoveUpRight />
    </Link>
  );
}
