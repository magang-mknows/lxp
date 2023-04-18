import { FC, ReactElement } from "react";

const DashboardProgressLoading: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-200 w-full px-6 py-4 rounded-md mb-10">
      <div className="h-7 mb-2 w-[50%] bg-neutral-300 animate-pulse rounded-md"></div>
      <div className="h-4 w-[10%] bg-neutral-300 animate-pulse rounded-md"></div>
      <section>
        <div className="border-[1px] border-neutral-200 rounded-md shadow-sm px-4 py-4 flex justify-between mb-6 flex-wrap gap-y-4">
          <section className=" flex gap-y-2 gap-x-6 items-center flex-wrap">
            <div className="h-24 w-24 rounded-md animate-pulse bg-neutral-300"></div>
            <section className="flex flex-col">
              <section className="mb-5">
                <div className="text-base h-8 mb-1 w-full bg-neutral-300 animate-pulse rounded-md text-neutral-800 font-bold"></div>
              </section>
              <section className="flex flex-col gap-2">
                <div className="w-80 bg-neutral-300 rounded-full h-3 dark:bg-gray-700"></div>
                <div className="text-sm text-neutral-400 w-40 h-6 bg-neutral-300 animate-pulse rounded-md"></div>
              </section>
            </section>
          </section>
        </div>
      </section>
      <section>
        <div className="border-[1px] border-neutral-200 rounded-md shadow-sm px-4 py-4 flex justify-between mb-6 flex-wrap gap-y-4">
          <section className=" flex gap-y-2 gap-x-6 items-center flex-wrap">
            <div className="h-24 w-24 rounded-md animate-pulse bg-neutral-300"></div>
            <section className="flex flex-col">
              <section className="mb-5">
                <div className="text-base h-8 mb-1 w-full bg-neutral-300 animate-pulse rounded-md text-neutral-800 font-bold"></div>
              </section>
              <section className="flex flex-col gap-2">
                <div className="w-80 bg-neutral-300 rounded-full h-3 dark:bg-gray-700"></div>
                <div className="text-sm text-neutral-400 w-40 h-6 bg-neutral-300 animate-pulse rounded-md"></div>
              </section>
            </section>
          </section>
        </div>
      </section>
      <section>
        <div className="border-[1px] border-neutral-200 rounded-md shadow-sm px-4 py-4 flex justify-between mb-6 flex-wrap gap-y-4">
          <section className=" flex gap-y-2 gap-x-6 items-center flex-wrap">
            <div className="h-24 w-24 rounded-md animate-pulse bg-neutral-300"></div>
            <section className="flex flex-col">
              <section className="mb-5">
                <div className="text-base h-8 mb-1 w-full bg-neutral-300 animate-pulse rounded-md text-neutral-800 font-bold"></div>
              </section>
              <section className="flex flex-col gap-2">
                <div className="w-80 bg-neutral-300 rounded-full h-3 dark:bg-gray-700"></div>
                <div className="text-sm text-neutral-400 w-40 h-6 bg-neutral-300 animate-pulse rounded-md"></div>
              </section>
            </section>
          </section>
        </div>
      </section>
    </section>
  );
};

export default DashboardProgressLoading;
