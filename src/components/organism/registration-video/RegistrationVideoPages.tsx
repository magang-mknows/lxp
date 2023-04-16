"use client";
import React, { Fragment, ReactElement, Suspense } from "react";
import Breadcums from "@/components/atoms/Breadcums";
import { guideVideoBreadCumbs } from "@/utils/const";
import dynamic from "next/dynamic";

const ContentSection = dynamic(() => import("./ContentSection"));

const RegistrationVideoPages = (): ReactElement => {
  return (
    <Fragment>
      <Suspense>
        <Breadcums items={guideVideoBreadCumbs} />
      </Suspense>
      <Suspense>
        <ContentSection />
      </Suspense>
    </Fragment>
  );
};

export default RegistrationVideoPages;
