import { FC, ReactElement } from "react";

const DashboardResumeLoading: FC = (): ReactElement => {
  return (
    <div className="w-full shadow-md  bg-neutral-200 shadow-neutral-100  rounded-md min-h-[540px] mb-10 overflow-hidden">
      <section className="text-neutral-50 bg-neutral-200 animate-pulse rounded-md relative px-6 pt-12 pb-28">
        <div className="font-bold text-2xl mb-2 h-10 w-40 bg-neutral-300 animate-pulse rounded-md"></div>
        <div className="font-bold text-2xl mb-2 h-5 w-60 bg-neutral-300 animate-pulse rounded-md"></div>
        <div className="font-bold text-2xl mb-2 h-5 w-32 bg-neutral-300 animate-pulse rounded-md"></div>
        <section className="absolute -bottom-64  grid grid-cols-2 gap-4 lg:gap-2">
          {[...Array(4)].map((item, index) => {
            return (
              <div
                key={index}
                className="h-40 bg-neutral-300 animate-pulse hover:bg-neutral-200 cursor-pointer transition-colors ease-in-out duration-300 rounded-lg shadow-sm w-[12 0px] md:w-32 lg:w-36"
              >
                <div className="flex  auto p-4 flex-col cursor-pointer  justify-between gap-y-4 text-neutral-500 hover:text-neutral-600 "></div>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default DashboardResumeLoading;
