"use client";
import React, { FC, Fragment, ReactElement, Suspense, lazy } from "react";
import Breadcums from "@/components/atoms/Breadcums";
import { guideBreadCumbs } from "@/utils/const";
import HeroSectionLoading from "@/modules/Guide/HeroSectionLoading";
import GuideSectionLoading from "@/modules/Guide/GuideSectionLoading";
import FaqSectionLoading from "@/modules/Guide/FaqSectionLoading";
import HeroSection from "./HeroSection";
import FaqSection from "./FaqSection";
import GuideSection from "./GuideSection";

const HeroSection = dynamic(() => import("./HeroSection"), {
  ssr: true,
});
const FaqSection = dynamic(() => import("./FaqSection"), {
  ssr: true,
});
const GuideSection = dynamic(() => import("./GuideSection"), {
  ssr: true,
});
const GuidePages: FC = (): ReactElement => {
  return (
    <Fragment>
      <Breadcums items={guideBreadCumbs} />
      <Suspense fallback={<HeroSectionLoading />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<FaqSectionLoading />}>
        <FaqSection />
      </Suspense>
      <Suspense fallback={<GuideSectionLoading />}>
        <GuideSection />
      </Suspense>
    </Fragment>
  );
};

export default GuidePages;
