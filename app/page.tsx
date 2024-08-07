import { NextjsHoverCard } from "@/components/HoverCards/Nextjs";
import PhotoGrid from "@/components/sections/PhotoGrid";
import { ArrowRightIcon, Link2, Link2Off, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { RiNextjsFill } from "react-icons/ri";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import IconBadge from "@/components/IconBadge";

export default function Home() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="mb-8">hey, I am Rahul 👋</h2>
        <div className="">
          <p className="">
            I am a frontend developer, optimist, and community builder. I
            currently specialize in building marketing websites for companies.
            With two years{" "}
            <IconBadge
              icon={<RiNextjsFill className="inline mr-2 h-4 w-4" />}
              tag="Nextjs"
            />{" "}
            of coding experience, I am now a full-time freelancer and tester.{" "}
          </p>

          <p className="">
            I am fine-tuning my freelancing business, sharing more online, and
            leveling up my design skills. I enjoy crafting components and
            experimenting new things.
          </p>
          <p className="">
            If you would like to collaborate, feel free to send me an{" "}
            <Link
              href="mailto:rg5353070@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-black dark:text-white"
            >
              email
            </Link>
            .
          </p>
        </div>
      </div>
      <div>
        <PhotoGrid />
      </div>
      <h2 className="mt-12">Featured Projects</h2>
      <p className="">
        I create educational content for developers, teaching them about web
        development, JavaScript and TypeScript, React and <NextjsHoverCard />,
        and more. This comes in all forms: blog posts, videos, tweets,
        conference talks, and workshops. You can watch some of my favorites
        below.
      </p>

      <div className="space-y-4 mt-8">
        <FeaturedProjectCard
          heading="Dark Alpha Capital"
          link="https://darkalphacapital.com/"
          description="Company website for a private equity firm built using Nextjs and Prismic"
        />
        <FeaturedProjectCard
          heading="Aigbe Law Firm"
          link="https://darkalphacapital.com/"
          description="Company website for a private equity firm built using Nextjs and Prismic"
        />
        <FeaturedProjectCard
          heading="Botbee-Labs"
          link="https://darkalphacapital.com/"
          description="Company website for a private equity firm built using Nextjs and Prismic"
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
          title="Best Content Management System?"
          link="/blog/what-makes-a-great-dev-rel"
        />

        <FeaturedBlogCard
          title="What makes a Great Dev Rel?"
          link="/blog/what-makes-a-great-dev-rel"
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

function FeaturedBlogCard({ title, link }: { title: string; link: string }) {
  return (
    <Link
      href={link}
      className="rounded-lg border bg-muted p-4 flex justify-between items-center"
    >
      <h4>{title}</h4>
      <MoveUpRight />
    </Link>
  );
}
