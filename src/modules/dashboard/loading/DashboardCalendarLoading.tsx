import { FC, ReactElement } from "react";

const DashboardCalendarLoading: FC = (): ReactElement => {
  return (
    <section className="w-full px-7 py-12 min-h-max bg-neutral-200 animate-pulse rounded-md">
      <section className="w-60 h-8 bg-neutral-300 rounded-md animate-pulse mb-2"></section>
      <section className="w-40 h-6 bg-neutral-300 rounded-md animate-pulse mb-20"></section>
      <section className="h-32 bg-neutral-300 rounded-md animate-pulse mb-2"></section>
    </section>
  );
};

export default DashboardCalendarLoading;
