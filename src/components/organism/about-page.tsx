"use client";
import AboutHeroLoading from "@/modules/about/loading/about-hero-loading";
import AboutJobsLoading from "@/modules/about/loading/about-jobs-loading";
import AboutTestimonialsLoading from "@/modules/about/loading/About-testimonials-loading";
import dynamic from "next/dynamic";
import { FC, ReactElement, Suspense } from "react";
const AboutHero = dynamic(() => import("../moleculs/about-hero"), {
  ssr: true,
});
const AboutTestimonials = dynamic(() => import("../moleculs/about-testimonials"), {
  ssr: true,
});
const AboutJobs = dynamic(() => import("../moleculs/about-jobs"), {
  ssr: true,
});

const AboutPage: FC = (): ReactElement => {
  return (
    <section className="min-h-[100vh]">
      <Suspense fallback={<AboutHeroLoading />}>
        <AboutHero />
      </Suspense>
      <Suspense fallback={<AboutTestimonialsLoading />}>
        <AboutTestimonials />
      </Suspense>
      <Suspense fallback={<AboutJobsLoading />}>
        <AboutJobs />
      </Suspense>
    </section>
  );
};

export default AboutPage;
