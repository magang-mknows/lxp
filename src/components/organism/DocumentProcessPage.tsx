"use client";
import DocumentProcessLoading from "@/modules/consulting-service/service/document-process/DocumentProcessLoading";
import { DocProcessBreadCumbs } from "@/utils/const";
import { FC, lazy, ReactElement, Suspense } from "react";
import Breadcums from "../atoms/Breadcums";

const DocumentProcessHeader = lazy(() => import("../moleculs/DocumentProcessHeader"));
const DocumentProcessForm = lazy(() => import("../moleculs/DocumentProcessForm"));

const DocumentProcessPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20">
      <Breadcums items={DocProcessBreadCumbs} />
      <Suspense fallback={<DocumentProcessLoading />}>
        <DocumentProcessHeader />
        <DocumentProcessForm />
      </Suspense>
    </section>
  );
};

export default DocumentProcessPage;
