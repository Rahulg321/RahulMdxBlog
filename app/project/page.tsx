import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of projects I have worked on",
};

const ProjectPage = () => {
  return (
    <section>
      <h2>see my projects.</h2>
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
        <FeaturedProjectCard
          heading="Botbee-Labs"
          websiteLink="https://botbee-labs.vercel.app/"
          githubLink="https://github.com/Rahulg321/Botbee-labs"
          description="landing page design for a startup"
        />
        <FeaturedProjectCard
          heading="HydraNode"
          websiteLink="https://hydra-node-ai.vercel.app/"
          description="ai driven education learning platform"
          status="pending"
        />
        <FeaturedProjectCard
          heading="Lawyer Portfolio Site"
          githubLink="https://github.com/Rahulg321/Gayatri-Gupta-Dark-Theme-Portfolio"
          websiteLink="https://www.gayatrilawoffices.in/"
          description="portfolio website for a lawyer"
        />
        <FeaturedProjectCard
          heading="Developer Portfolio Site"
          githubLink="https://github.com/Rahulg321/developer-portfolio-site"
          websiteLink="https://rahul-portfolio-app-nu.vercel.app/"
          description="developer portfolio site built using nextjs"
        />
        <FeaturedProjectCard
          heading="Techno Club"
          githubLink="https://github.com/Rahulg321/Techno-Club"
          websiteLink="https://techno-club-gilt.vercel.app/"
          description="website for a college club"
          status="pending"
        />
        <FeaturedProjectCard
          heading="Hero Technologies"
          githubLink="https://github.com/Rahulg321/Hero-Technologies"
          websiteLink="https://hero-technologies-i2yo.vercel.app/home"
          description="company website for a private equity firm"
        />
      </div>
    </section>
  );
};

export default ProjectPage;
