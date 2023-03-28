import { DocProcessBreadCumbs } from "@/utils/const";
import { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import DocumentProcessForm from "../moleculs/DocumentProcessForm";
import DocumentProcessHeader from "../moleculs/DocumentProcessHeader";

const DocumentProcessPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh]">
      <Breadcums items={DocProcessBreadCumbs} />
      <DocumentProcessHeader />
      <DocumentProcessForm />
    </section>
  );
};

export default DocumentProcessPage;
