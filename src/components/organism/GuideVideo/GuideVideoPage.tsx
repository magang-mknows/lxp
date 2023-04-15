"use client";
import { Fragment, ReactElement, Suspense } from "react";
import Breadcums from "@/components/atoms/breadcums";
import { guideVideoBreadCumbs } from "@/utils/const";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection"), {
  ssr: true,
});
const ContentSection = dynamic(() => import("./ContentSection"), {
  ssr: true,
});

const GuideVideoPages = (): ReactElement => {
  return (
    <Fragment>
      <Breadcums items={guideVideoBreadCumbs} />
      <Suspense>
        <HeroSection />
        <ContentSection />
      </Suspense>
    </Fragment>
  );
};

export default GuideVideoPages;
