import React, { ReactElement, Suspense } from "react";
import AnotherGuideBookSection from "./AnotherGuideBookSection";
import ContentSection from "./ContentSection";
import HeroSection from "./HeroSection";
import LayoutProvider from "@/providers/LayoutProvider";
import Breadcums from "@/components/atoms/Breadcums";
import { guideBookBreadCumbs } from "@/utils/const";

const RegistrationGuideBookModule = (): ReactElement => {
  return (
    <Suspense>
      <LayoutProvider>
        <Breadcums items={guideBookBreadCumbs} />
        <HeroSection />
        <ContentSection />
        <AnotherGuideBookSection />
      </LayoutProvider>
    </Suspense>
  );
};

export default RegistrationGuideBookModule;
