import React, { FC, Fragment, ReactElement, Suspense } from "react";
import HeroSection from "./HeroSection";
import GuideSection from "./GuideSection";
import LayoutProvider from "@/providers/LayoutProvider";
import Breadcums from "@/components/atoms/Breadcums";
import { guideBreadCumbs } from "@/utils/const";
import HeroSectionLoading from "../../../modules/Guide/HeroSectionLoading";
import GuideSectionLoading from "../../../modules/Guide/GuideSectionLoading";
import FaqSection from "./FaqSection";
import FaqSectionLoading from "@/modules/Guide/FaqSectionLoading";

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