"use client";
import React, { ReactElement, Suspense } from "react";
import LayoutProvider from "@/providers/LayoutProvider";
import Breadcums from "@/components/atoms/Breadcums";
import { guideBookBreadCumbs } from "@/utils/const";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection"), {
  ssr: true,
});
const ContentSection = dynamic(() => import("./ContentSection"), {
  ssr: true,
});

const GuideBookPages = (): ReactElement => {
  return (
    <LayoutProvider className="!bg-[#fff]">
      <Breadcums items={guideBookBreadCumbs} />
      <Suspense>
        <HeroSection />
        <ContentSection />
      </Suspense>
    </LayoutProvider>
  );
};

export default GuideBookPages;
