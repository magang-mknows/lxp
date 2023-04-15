"use client";
import { DocServiceBreadCumbs } from "@/utils/const";
import { FC, ReactElement } from "react";
import Breadcums from "../atoms/breadcums";
import DocumentServiceHeader from "../moleculs/document-service-header";

import DocumentServiceList from "../moleculs/document-service-list";

const DocumentServicePage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh]">
      <Breadcums items={DocServiceBreadCumbs} />
      <DocumentServiceHeader />
      <DocumentServiceList />
    </section>
  );
};

export default DocumentServicePage;
