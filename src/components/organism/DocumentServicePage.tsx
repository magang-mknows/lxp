"use client";
import { DocServiceBreadCumbs } from "@/utils/const";
import { FC, ReactElement, lazy } from "react";
import Breadcums from "../atoms/Breadcums";
import DocumentServiceHeader from "../moleculs/DocumentServiceHeader";
import SuspenseError from "@/providers/SuspenseError";
import CardLoading from "@/modules/consulting-service/service/document/loading/CardLoading";

const DocumentServiceList = lazy(() => import("../moleculs/DocumentServiceList"));

const DocumentServicePage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh]">
      <Breadcums items={DocServiceBreadCumbs} />
      <DocumentServiceHeader />
      <SuspenseError loadingFallback={<CardLoading />}>
        <DocumentServiceList />
      </SuspenseError>
    </section>
  );
};

export default DocumentServicePage;
