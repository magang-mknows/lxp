"use client";

import { FC, ReactElement } from "react";

import DashboardCalendarCard from "../atoms/DashboardCalendarCard";
import DashboardCalendarHeader from "../atoms/DashboardCalendarHeader";

const DashboardCalendar: FC = (): ReactElement => {
  return (
    <section className="w-full text-neutral-900 bg-neutral-50 shadow-sm h-fit px-7 py-12 rounded-md">
      <DashboardCalendarHeader />
      <section className="text-sm">
        <DashboardCalendarCard />
      </section>
    </section>
  );
};

export default DashboardCalendar;
