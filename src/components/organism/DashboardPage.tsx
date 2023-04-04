import { DashboardBreadCumbs } from "@/utils/const";
import React, { FC, lazy, ReactElement } from "react";

const Breadcums = lazy(() => import("../atoms/Breadcums"));
const DashbordResume = lazy(() => import("../moleculs/DashboardResume"));
const DashboardArticle = lazy(() => import("../moleculs/DashboardArticle"));
const DashboardLeaderBoard = lazy(() => import("../moleculs/DashboardLeaderBoard"));
const DashboardEvent = lazy(() => import("../moleculs/DashboardEvent"));
const DashboardTask = lazy(() => import("../moleculs/DashboardTask"));
const DashboardProgress = lazy(() => import("../moleculs/DashboardProgress"));
const DashboardCalendar = lazy(() => import("../moleculs/DashboardCalendar"));

const DashboardPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20">
      <Breadcums items={DashboardBreadCumbs} />
      <div className="grid grid-cols-3 gap-x-10 px-8 md:px-14 lg:px-16">
        <div className="flex flex-col lg:col-span-3 xl:col-span-1 col-span-3">
          <div className="flex xl:flex-col gap-x-10 md:flex-row lg:flex-row flex-col ">
            <DashbordResume />
            <DashboardLeaderBoard />
          </div>
          <DashboardArticle />
        </div>
        <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <DashboardTask />
            <DashboardEvent />
          </div>
          <DashboardProgress />
          <DashboardCalendar />
        </div>
      </div>
    </section>
  );
};
export default DashboardPage;
