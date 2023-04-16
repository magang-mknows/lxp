import DocumentProcessModule from "@/modules/consulting-service/service/document-process/DocumentProcessModule";
import { NextPage } from "next";
import { ReactElement } from "react";

export const metadata = {
  title: "Proses Dokumen | LXP App",
};

const page: NextPage = (): ReactElement => {
  return <DocumentProcessModule />;
};

export default page;
