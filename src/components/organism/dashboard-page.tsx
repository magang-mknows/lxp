"use client";
import { DashboardBreadCumbs } from "@/utils/const";
import React, { FC, ReactElement } from "react";
import Breadcums from "../atoms/breadcums";
import DashboardArticle from "../moleculs/dashboard-article";
import DashboardCalendar from "../moleculs/dashboard-calendar";
import DashboardEvent from "../moleculs/dashboard-event";
import DashboardLeaderBoard from "../moleculs/dashboard-leaderBoard";
import DashboardProgress from "../moleculs/dashboard-progress";
import DashbordResume from "../moleculs/dashboard-resume";
import DashboardTask from "../moleculs/dashboard-task";

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
