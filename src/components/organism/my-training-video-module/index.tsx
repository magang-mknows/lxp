"use client";
import React, { Fragment, ReactElement } from "react";
import Breadcums from "@/components/atoms/Breadcums";
import { guideVideoBreadCumbs } from "@/utils/const";
import dynamic from "next/dynamic";

const ContentSection = dynamic(() => import("./ContentSection"));

const VideoTrainingPages = (): ReactElement => {
  return (
    <Fragment>
      <Breadcums items={guideVideoBreadCumbs} />
      <ContentSection />
    </Fragment>
  );
};

export default VideoTrainingPages;
