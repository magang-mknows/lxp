import { FC, ReactElement } from "react";

const DashboardArticleLoading: FC = (): ReactElement => {
  return (
    <div className=" w-full  overflow-hidden mb-10 ">
      <div className="flex flex-row items-center justify-between mb-4 h-80 w-full bg-neutral-200 rounded-md animate-pulse"></div>
    </div>
  );
};

export default DashboardArticleLoading;
