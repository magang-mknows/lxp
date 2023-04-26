import React, { FC, ReactElement } from "react";
import AnalyticIconLoading from "./AnalyticIconLoading";

const AnalyticGraphLoading: FC = (): ReactElement => {
  return (
    <section className=" bg-neutral-200 py-6 px-8 w-full">
      <header className="mb-14 w-[50%] h-7 rounded-md animate-pulse bg-neutral-200 "></header>
      <main className="grid grid-cols-3 gap-6">
        {/* <AnalyticGraph /> */}
        <div className="col-span-3 lg:col-span-2  rounded-md animate-pulse px-4 relative bg-neutral-300 w-full h-[110px] lg:h-[400px] "></div>

        {/* <AnalyticIcon /> */}
        <AnalyticIconLoading />
      </main>
    </section>
  );
};

export default AnalyticGraphLoading;
