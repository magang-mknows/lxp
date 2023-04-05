import React, { ReactElement, Suspense } from "react";
import ContentSection from "./ContentSection";
import HeroSection from "./HeroSection";
import Breadcums from "@/components/atoms/Breadcums";
import LayoutProvider from "@/providers/LayoutProvider";
import { guideVideoBreadCumbs } from "@/utils/const";

const GuideVideoPages = (): ReactElement => {
  return (
    <div>
      <LayoutProvider className="!bg-[#fff]">
        <Suspense>
          <Breadcums items={guideVideoBreadCumbs} />
        </Suspense>
        <Suspense>
          <HeroSection />
        </Suspense>
        <Suspense>
          <ContentSection />
        </Suspense>
      </LayoutProvider>
    </div>
  );
};

export default GuideVideoPages;
