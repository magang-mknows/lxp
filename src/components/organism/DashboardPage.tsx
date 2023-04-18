"use client";
import { DashboardBreadCumbs } from "@/utils/const";
import React, { FC, ReactElement, lazy } from "react";
import Breadcums from "../atoms/Breadcums";
import SuspenseError from "@/providers/SuspenseError";
import DashboardResumeLoading from "@/modules/dashboard/loading/DashboardResumeLoading";
import DashboardLeaderboardLoading from "@/modules/dashboard/loading/DashboardLeaderboardLoading";
import DashboardCarouselLoading from "@/modules/dashboard/loading/DashboardCarouselLoading";
import DashboardProgressLoading from "@/modules/dashboard/loading/DashboardProgressLoading";
import DashboardCalendarLoading from "@/modules/dashboard/loading/DashboardCalendarLoading";
import DashboardArticleLoading from "@/modules/dashboard/loading/DashboardArticleLoading";

const DashbordResume = lazy(() => import("../moleculs/DashboardResume"));
const DashboardLeaderBoard = lazy(() => import("../moleculs/DashboardLeaderBoard"));
const DashboardTask = lazy(() => import("../moleculs/DashboardTask"));
const DashboardEvent = lazy(() => import("../moleculs/DashboardEvent"));
const DashboardArticle = lazy(() => import("../moleculs/DashboardArticle"));
const DashboardCalendar = lazy(() => import("../moleculs/DashboardCalendar"));
const DashboardProgress = lazy(() => import("../moleculs/DashboardProgress"));

const DashboardPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20">
      <Breadcums items={DashboardBreadCumbs} />
      <div className="grid grid-cols-3 gap-x-10 px-8 md:px-14 lg:px-16">
        <div className="flex flex-col lg:col-span-3 xl:col-span-1 col-span-3">
          <div className="flex xl:flex-col gap-x-10 md:flex-row lg:flex-row flex-col ">
            <SuspenseError loadingFallback={<DashboardResumeLoading />}>
              <DashbordResume />
            </SuspenseError>
            <SuspenseError loadingFallback={<DashboardLeaderboardLoading />}>
              <DashboardLeaderBoard />
            </SuspenseError>
          </div>
          <SuspenseError loadingFallback={<DashboardArticleLoading />}>
            <DashboardArticle />
          </SuspenseError>
        </div>
        <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <SuspenseError loadingFallback={<DashboardCarouselLoading />}>
              <DashboardTask />
            </SuspenseError>
            <SuspenseError loadingFallback={<DashboardCarouselLoading />}>
              <DashboardEvent />
            </SuspenseError>
          </div>
          <SuspenseError loadingFallback={<DashboardProgressLoading />}>
            <DashboardProgress />
          </SuspenseError>
          <SuspenseError loadingFallback={<DashboardCalendarLoading />}>
            <DashboardCalendar />
          </SuspenseError>
        </div>
      </div>
    </section>
  );
};
export default DashboardPage;
