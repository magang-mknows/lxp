"use client";
import AboutHeroLoading from "@/modules/about/loading/AboutHeroLoading";
import AboutJobsLoading from "@/modules/about/loading/AboutJobsLoading";
import AboutTestimonialsLoading from "@/modules/about/loading/AboutTestimonialsLoading";
import dynamic from "next/dynamic";
import { FC, ReactElement, Suspense } from "react";
const AboutHero = dynamic(() => import("../moleculs/AboutHero"), {
  ssr: true,
});
const AboutTestimonials = dynamic(() => import("../moleculs/AboutTestimonials"), {
  ssr: true,
});
const AboutJobs = dynamic(() => import("../moleculs/AboutJobs"), {
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
