import React, { Fragment } from "react";
import ContentSection from "./ContentSection";
import Breadcums from "@/components/atoms/Breadcums";
import { myTrainingModuleBreadCumbs } from "@/utils/const";

const MyTrainingModulePage = () => {
  return (
    <Fragment>
      <Breadcums items={myTrainingModuleBreadCumbs} />
      <ContentSection />
    </Fragment>
  );
};

export default MyTrainingModulePage;
