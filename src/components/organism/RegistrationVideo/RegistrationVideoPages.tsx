"use client";
import React, { Fragment, ReactElement } from "react";
import Breadcums from "@/components/atoms/breadcums";
import { guideVideoBreadCumbs } from "@/utils/const";
import dynamic from "next/dynamic";

const ContentSection = dynamic(() => import("./ContentSection"));

const RegistrationVideoPages = (): ReactElement => {
  return (
    <Fragment>
      <Breadcums items={guideVideoBreadCumbs} />
      <ContentSection />
    </Fragment>
  );
};

export default RegistrationVideoPages;
