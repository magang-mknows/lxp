"use client";
import { DocStatusBreadCumbs } from "@/utils/const";
import React, { FC, ReactElement } from "react";
import Breadcums from "../atoms/breadcums";
import DocumentStatusContainer from "../moleculs/document-status-container";
import DocumentStatusHeader from "../moleculs/document-status-header";

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
