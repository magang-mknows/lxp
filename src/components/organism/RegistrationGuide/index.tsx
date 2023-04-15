"use client";
import React, { ReactElement, Suspense } from "react";
import LayoutProvider from "@/providers/LayoutProvider";
import Breadcums from "@/components/atoms/breadcums";
import { guideBookBreadCumbs } from "@/utils/const";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection"), {
  ssr: true,
});
const ContentSection = dynamic(() => import("./ContentSection"), {
  ssr: true,
});
const AnotherGuideBookSection = dynamic(() => import("./AnotherGuideBookSection"), {
  ssr: true,
});

const RegistrationGuideBookModule = (): ReactElement => {
  return (
    <LayoutProvider>
      <Breadcums items={guideBookBreadCumbs} />
      <Suspense>
        <HeroSection />
        <ContentSection />
        <AnotherGuideBookSection />
      </Suspense>
    </LayoutProvider>
  );
};

export default RegistrationGuideBookModule;
