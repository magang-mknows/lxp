"use client";
import { AnalyticBreadcumbs } from "@/utils/const";
import { FC, ReactElement } from "react";
import Breadcums from "../atoms/breadcums";
import AnalyticMain from "../moleculs/analytic-main";
import AnalyticSidebar from "../moleculs/analytic-sidebar";

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
