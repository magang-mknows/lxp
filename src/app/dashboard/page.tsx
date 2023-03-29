import DashboardModule from "@/modules/dashboard/DashboardModule";
import { NextPage } from "next";
import { ReactElement } from "react";

const page: NextPage = (): ReactElement => {
  return <DashboardModule />;
};

export default page;
