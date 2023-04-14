import { FC, ReactElement } from "react";

const AnalyticSidebarLoading: FC = (): ReactElement => {
  return (
    <div className="col-span-3 h-fit lg:col-span-1 bg-neutral-200 rounded-md animate-pulse w-full py-20">
      {/* <AnalyticSidebarHeader /> */}
      <div className="flex flex-col items-center justify-center gap-3 mb-16">
        <div className="bg-neutral-300 animate-pulse h-28 w-28 rounded-full"></div>
        <div className="flex flex-col items-center justify-center w-full gap-1">
          <div className="h-6  w-[60%] bg-neutral-300 animate-pulse rounded-md "></div>
          <div className=" h-5 w-[40%] bg-neutral-300 animate-pulse rounded-md"></div>
        </div>
      </div>
      {/* <AnalyticSidebarMain /> */}
      <main className="px-8 w-full py-3">
        {[...Array(5)].map((item, index) => {
          return (
            <div key={index} className="h-10 flex items-center justify-between  py-3 w-full mb-4">
              <div className="flex items-center gap-3 w-full h-10">
                <div className=" bg-neutral-300 animate-pulse p-2 rounded-md shadow-xs h-9 w-9"></div>
                <div className="w-full h-9 bg-neutral-300 rounded-md animate-pulse"></div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default AnalyticSidebarLoading;
