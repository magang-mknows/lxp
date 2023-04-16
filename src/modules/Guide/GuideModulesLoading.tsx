import React, { FC, Fragment, ReactElement } from "react";
import Breadcums from "@/components/atoms/Breadcums";
import { guideBreadCumbs } from "@/utils/const";
import FaqSectionLoading from "@/modules/Guide/FaqSectionLoading";
import HeroSectionLoading from "./HeroSectionLoading";
import GuideSectionLoading from "./GuideSectionLoading";

const GuideModulesLoading: FC = (): ReactElement => {
  return (
    <div className="mt-[76px]">
      <Breadcums items={guideBreadCumbs} />
      <HeroSectionLoading />
      <FaqSectionLoading />
      <GuideSectionLoading />
    </div>
  );
};

export default GuideModulesLoading;
