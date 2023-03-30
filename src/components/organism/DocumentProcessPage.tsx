import DocumentFormLoading from "@/modules/consulting-service/service/document-process/DocumentFormLoading";
import { DocProcessBreadCumbs } from "@/utils/const";
import dynamic from "next/dynamic";
import { FC, ReactElement, Suspense } from "react";
import Breadcums from "../atoms/Breadcums";
import DocumentProcessForm from "../moleculs/DocumentProcessForm";
import DocumentProcessHeader from "../moleculs/DocumentProcessHeader";

const DocumentProcessPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20">
      <Breadcums items={DocProcessBreadCumbs} />
      <DocumentProcessHeader />
      <DocumentProcessForm />
    </section>
  );
};

export default DocumentProcessPage;
