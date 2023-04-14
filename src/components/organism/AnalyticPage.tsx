"use client";
import AnalyticSidebarLoading from "@/modules/analytic/AnalyticSidebarLoading";
import { AnalyticBreadcumbs } from "@/utils/const";
import { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import AnalyticMain from "../moleculs/AnalyticMain";
import AnalyticSidebar from "../moleculs/AnalyticSidebar";

const AnalyticPage: FC = (): ReactElement => {
  return (
    <section className="min-h-[120vh]">
      <Breadcums items={AnalyticBreadcumbs} />
      <section className="grid grid-cols-3 gap-6 px-8 md:px-14 lg:px-16">
        <AnalyticSidebar />
        <AnalyticMain />
      </section>
    </section>
  );
};

export default AnalyticPage;
