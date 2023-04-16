import React, { FC, ReactElement } from "react";

const AnalyticPerformanceLoading: FC = (): ReactElement => {
  return (
    <section className="col-span-3 lg:col-span-2 bg-neutral-200 px-8 rounded-md animate-pulse py-3">
      <div className="bg-neutral-200 h-5 w-full animate-pulse py-2"></div>
      <main className="py-4 flex flex-col gap-5 mt-4">
        {[...Array(5)].map((item, index) => {
          return (
            <div
              className="flex w-full h-6 bg-neutral-300 animate-pulse rounded-md"
              key={index}
            ></div>
          );
        })}
      </main>
    </section>
  );
};

export default AnalyticPerformanceLoading;
