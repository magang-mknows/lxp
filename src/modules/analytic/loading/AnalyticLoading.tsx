import { FC, ReactElement } from "react";
import AnalyticGraphLoading from "./AnalyticGraphLoading";
import AnalyticIconLoading from "./AnalyticIconLoading";
import AnalyticPerformanceLoading from "./AnalyticPerformanceLoading";
import AnalyticRecentPerformanceLoading from "./AnalyticRecentPerformanceLoading";
import AnalyticSidebarLoading from "./AnalyticSidebarLoading";

const AnalyticLoading: FC = (): ReactElement => {
  return (
    <section className="pt-[74px] bg-neutral-100/70">
      <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
        <div className="bg-neutral-200 animate-pulse rounded-md w-44 h-4"></div>
      </section>
      <section className="grid grid-cols-3 gap-6 px-8 md:px-14 lg:px-16">
        {/* <AnalyticSidebar /> */}
        <AnalyticSidebarLoading />
        {/* <AnalyticMain /> */}
        <div className="w-full col-span-3 lg:col-span-2 flex flex-col gap-6">
          <section className=" bg-neutral-200 py-6 px-8 w-full">
            <header className="mb-14 w-[50%] h-7 rounded-md animate-pulse bg-neutral-200 "></header>
            <main className="grid grid-cols-3 gap-6">
              {/* <AnalyticGraph /> */}
              <AnalyticGraphLoading />
              {/* <AnalyticIcon /> */}
              <AnalyticIconLoading />
            </main>
          </section>
          <section className="grid grid-cols-3 gap-7 min-h-[300px] mb-10">
            {/* <AnalyticRecentPerformance /> */}
            <AnalyticRecentPerformanceLoading />
            <AnalyticPerformanceLoading />
          </section>
        </div>
      </section>
    </section>
  );
};

export default AnalyticLoading;
