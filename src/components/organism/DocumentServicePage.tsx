import { DocServiceBreadCumbs } from "@/utils/const";
import { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import DocumentServiceHeader from "../moleculs/DocumentServiceHeader";

import DocumentServiceList from "../moleculs/DocumentServiceList";

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
