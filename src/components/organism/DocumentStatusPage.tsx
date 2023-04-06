"use client";
import { DocStatusBreadCumbs } from "@/utils/const";
import React, { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import DocumentStatusContainer from "../moleculs/DocumentStatusContainer";
import DocumentStatusHeader from "../moleculs/DocumentStatusHeader";

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
