import React, { FC, ReactElement } from "react";

const AnalyticGraphLoading: FC = (): ReactElement => {
  return (
    <div className="col-span-3 lg:col-span-2  rounded-md animate-pulse px-4 relative bg-neutral-300 w-full h-[110px] lg:h-[400px] "></div>
  );
};

export default AnalyticGraphLoading;
