"use client";
import { FC, ReactElement } from "react";
import AnalyticSidebarHeader from "../atoms/analytic-sidebar-header";
import AnalyticSidebarMain from "../atoms/analytic-sidebar-main";

const AnalyticSidebar: FC = (): ReactElement => {
  return (
    <aside className="col-span-3 h-fit lg:col-span-1 bg-neutral-50 w-full py-20">
      <AnalyticSidebarHeader />
      <AnalyticSidebarMain />
    </aside>
  );
};

export default AnalyticSidebar;
