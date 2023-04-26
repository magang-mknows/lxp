import AnalyticGraphLoading from "@/modules/analytic/loading/AnalyticGraphLoading";
import AnalyticIconLoading from "@/modules/analytic/loading/AnalyticIconLoading";
import AnalyticPerformanceLoading from "@/modules/analytic/loading/AnalyticPerformanceLoading";
import AnalyticRecentPerformanceLoading from "@/modules/analytic/loading/AnalyticRecentPerformanceLoading";
import SuspenseError from "@/providers/SuspenseError";
import { FC, ReactElement, lazy } from "react";

const AnalyticIcon = lazy(() => import("../atoms/AnalyticIcon"));
const AnalyticGraph = lazy(() => import("../atoms/AnalyticGraph"));
const AnalyticPerformance = lazy(() => import("../atoms/AnalyticPerformance"));
const AnalyticRecentPerformance = lazy(() => import("../atoms/AnalyticRecentPerformance"));

const AnalyticMain: FC = (): ReactElement => {
  return (
    <main className="w-full col-span-3 lg:col-span-2 flex flex-col gap-6">
      <SuspenseError loadingFallback={<AnalyticGraphLoading />}>
        <section className=" bg-neutral-50 py-6 px-8 w-full">
          <header className="mb-10 text-base font-bold border-b-[0.5px] border-neutral-300 pb-3">
            <h1>Analisa hasil belajar tiap Batch</h1>
          </header>
          <main className="grid grid-cols-3 gap-6">
            <AnalyticGraph />
            <AnalyticIcon />
          </main>
        </section>
      </SuspenseError>
      <section className="grid grid-cols-3 gap-7 min-h-[300px]">
        <SuspenseError loadingFallback={<AnalyticRecentPerformanceLoading />}>
          <AnalyticRecentPerformance />
        </SuspenseError>
        <SuspenseError loadingFallback={<AnalyticPerformanceLoading />}>
          <AnalyticPerformance />
        </SuspenseError>
      </section>
    </main>
  );
};

export default AnalyticMain;
