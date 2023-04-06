"use client";
import AboutHeroLoading from "@/modules/about/AboutHeroLoading";
import AboutJobsLoading from "@/modules/about/AboutJobsLoading";
import dynamic from "next/dynamic";
import { FC, Fragment, ReactElement, Suspense } from "react";
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
    <Fragment>
      <Suspense fallback={<AboutHeroLoading />}>
        <AboutHero />
      </Suspense>
      <Suspense fallback={<AboutHeroLoading />}>
        <AboutTestimonials />
      </Suspense>
      <Suspense fallback={<AboutJobsLoading />}>
        <AboutJobs />
      </Suspense>
    </Fragment>
  );
};

export default AboutPage;
