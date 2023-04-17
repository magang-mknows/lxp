"use client";
import AboutHeroLoading from "@/modules/about/loading/AboutHeroLoading";
import AboutJobsLoading from "@/modules/about/loading/AboutJobsLoading";
import AboutTestimonialsLoading from "@/modules/about/loading/AboutTestimonialsLoading";
import SuspenseError from "@/providers/SuspenseError";
import { FC, ReactElement, lazy } from "react";
const AboutHero = lazy(() => import("../moleculs/AboutHero"));
const AboutTestimonials = lazy(() => import("../moleculs/AboutTestimonials"));
const AboutJobs = lazy(() => import("../moleculs/AboutJobs"));

const AboutPage: FC = (): ReactElement => {
  return (
    <section className="min-h-[100vh]">
      <SuspenseError loadingFallback={<AboutHeroLoading />}>
        <AboutHero />
      </SuspenseError>
      <SuspenseError loadingFallback={<AboutTestimonialsLoading />}>
        <AboutTestimonials />
      </SuspenseError>
      <SuspenseError loadingFallback={<AboutJobsLoading />}>
        <AboutJobs />
      </SuspenseError>
    </section>
  );
};

export default AboutPage;
