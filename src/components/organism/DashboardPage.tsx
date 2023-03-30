import { DashboardBreadCumbs } from "@/utils/const";
import dynamic from "next/dynamic";
import React, { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import DashboardCalendar from "../moleculs/DashboardCalendar";
import DashboardProgress from "../moleculs/DashboardProgress";

const DashbordResume = dynamic(() => import("../moleculs/DashboardResume"), { ssr: false });
const DashboardArticle = dynamic(() => import("../moleculs/DashboardArticle"), { ssr: false });
const DashboardLeaderBoard = dynamic(() => import("../moleculs/DashboardLeaderBoard"), {
  ssr: false,
});
const DashboardEvent = dynamic(() => import("../moleculs/DashboardEvent"), {
  ssr: false,
});
const DashboardTask = dynamic(() => import("../moleculs/DashboardTask"), {
  ssr: false,
});

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
          <div className="flex gap-6 w-full flex-wrap lg:flex-nowrap   mb-6">
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
