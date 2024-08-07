import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import React from "react";

const ProjectPage = () => {
  return (
    <section>
      <h2>see my projects.</h2>
      <div className="space-y-4 mt-8">
        <FeaturedProjectCard
          heading="Botbee-Labs"
          link="https://darkalphacapital.com/"
          description="Company website for a private equity firm built using Nextjs and Prismic"
        />
        <FeaturedProjectCard
          heading="HydraNode"
          link="https://darkalphacapital.com/"
          description="Company website for a private equity firm built using Nextjs and Prismic"
        />
        <FeaturedProjectCard
          heading="Securities Law Blog"
          link="https://darkalphacapital.com/"
          description="Company website for a private equity firm built using Nextjs and Prismic"
        />
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
          heading="Lawyer Portfolio Site"
          link="https://darkalphacapital.com/"
          description="Company website for a private equity firm built using Nextjs and Prismic"
        />
        <FeaturedProjectCard
          heading="Developer Portfolio Site"
          link="https://darkalphacapital.com/"
          description="Company website for a private equity firm built using Nextjs and Prismic"
        />
        <FeaturedProjectCard
          heading="Techno Club"
          link="https://techno-club-gilt.vercel.app/"
          description="Company website for a private equity firm built using Nextjs and Prismic"
        />
        <FeaturedProjectCard
          heading="Botbee-Labs"
          link="https://darkalphacapital.com/"
          description="Company website for a private equity firm built using Nextjs and Prismic"
        />
      </div>
    </section>
  );
};

export default ProjectPage;
