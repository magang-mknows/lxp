import AnalyticModule from "@/modules/analytic/AnalyticModule";
import { NextPage } from "next";
import { ReactElement } from "react";

const page: NextPage = (): ReactElement => {
  return <AnalyticModule />;
};

export default page;
