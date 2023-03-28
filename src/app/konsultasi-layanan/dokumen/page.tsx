import DocumentServiceModule from "@/modules/consulting-service/service/document/DocumentServiceModule";
import { NextPage } from "next";
import { ReactElement } from "react";

export const metadata = {
  title: "Konsultasi & Service | LXP App",
};

const page: NextPage = (): ReactElement => {
  return <DocumentServiceModule />;
};

export default page;
