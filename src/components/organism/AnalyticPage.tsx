"use client";
import { AnalyticBreadcumbs } from "@/utils/const";
import { FC, ReactElement, lazy } from "react";
import Breadcums from "../atoms/Breadcums";
import AnalyticMain from "../moleculs/AnalyticMain";
import SuspenseError from "@/providers/SuspenseError";
import AnalyticSidebarLoading from "@/modules/analytic/loading/AnalyticSidebarLoading";

const AnalyticSidebar = lazy(() => import("../moleculs/AnalyticSidebar"));

const AnalyticPage: FC = (): ReactElement => {
  return (
    <section className="min-h-[120vh]">
      <Breadcums items={AnalyticBreadcumbs} />
      <section className="grid grid-cols-3 gap-6 px-8 md:px-14 lg:px-16">
        <SuspenseError loadingFallback={<AnalyticSidebarLoading />}>
          <AnalyticSidebar />
        </SuspenseError>
        <AnalyticMain />
      </section>
    </section>
  );
};

export default AnalyticPage;
