"use client";
import { DocStatusBreadCumbs } from "@/utils/const";
import React, { FC, ReactElement, lazy } from "react";
import Breadcums from "../atoms/Breadcums";
import DocumentStatusHeader from "../moleculs/DocumentStatusHeader";
import DocumentStatusContainer from "../moleculs/DocumentStatusContainer";

const DocumentStatusPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20">
      <Breadcums items={DocStatusBreadCumbs} />
      <DocumentStatusHeader />
      <DocumentStatusContainer />
    </section>
  );
};

export default DocumentStatusPage;
