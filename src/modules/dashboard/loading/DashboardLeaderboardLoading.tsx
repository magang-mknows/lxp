import { FC, ReactElement } from "react";

const DashboardLeaderboardLoading: FC = (): ReactElement => {
  return (
    <section className="w-full bg-neutral-200 animate-pulse  mb-10 px-8 py-7 rounded-md  shadow-md shadow-neutral-100 min-h-[560px] ">
      <div className="mb-8">
        <div className="font-bold text-2xl mb-2 h-10 w-40 bg-neutral-300 animate-pulse rounded-md"></div>
        <div className="font-bold text-2xl mb-2 h-4 w-56 bg-neutral-300 animate-pulse rounded-md"></div>
        <div className="font-bold text-2xl mb-2 h-4 w-40 bg-neutral-300 animate-pulse rounded-md"></div>
      </div>
      <div>
        <div className="h-16 w-full bg-neutral-300 rounded-md animate-pulse mb-2"></div>
        <div className="h-16 w-full bg-neutral-300 rounded-md animate-pulse mb-2"></div>
        <div className="h-16 w-full bg-neutral-300 rounded-md animate-pulse mb-2"></div>
        <div className="h-16 w-full bg-neutral-300 rounded-md animate-pulse mb-2"></div>
      </div>
    </section>
  );
};

export default DashboardLeaderboardLoading;
