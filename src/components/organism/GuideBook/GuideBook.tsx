import React, { ReactElement, Suspense } from "react";
import ContentSection from "./ContentSection";
import HeroSection from "./HeroSection";
import LayoutProvider from "@/providers/LayoutProvider";
import Breadcums from "@/components/atoms/Breadcums";
import { guideBookBreadCumbs } from "@/utils/const";

const GuideBookPages = (): ReactElement => {
  return (
    <div>
      <LayoutProvider className="!bg-[#fff]">
        <Suspense>
          <Breadcums items={guideBookBreadCumbs} />
          <HeroSection />
          <ContentSection />
        </Suspense>
      </LayoutProvider>
    </div>
  );
};

export default GuideBookPages;
