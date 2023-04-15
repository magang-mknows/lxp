import { FC, ReactElement } from "react";

const DashboardLoading: FC = (): ReactElement => {
  return (
    <section className="pt-[74px] lg:pt-[138px] bg-neutral-50/60  min-h-[100vh]">
      <section className="bg-neutral-50/60 min-h-[100vh] pb-20">
        <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
          <div className="bg-neutral-200 animate-pulse rounded-md w-40 h-4"></div>
        </section>
        <div className="grid grid-cols-3 gap-x-10 px-8 md:px-14 lg:px-16">
          <div className="flex flex-col lg:col-span-3 xl:col-span-1 col-span-3">
            <div className="flex xl:flex-col gap-x-10 md:flex-row lg:flex-row flex-col ">
              <div className="w-full shadow-md  bg-neutral-50 shadow-neutral-100  rounded-md min-h-[540px] mb-10 overflow-hidden">
                <section className="text-neutral-50 bg-neutral-200 animate-pulse rounded-md relative px-6 pt-12 pb-28">
                  <div className="font-bold text-2xl mb-2 h-10 w-40 bg-neutral-300 animate-pulse rounded-md"></div>
                  <div className="font-bold text-2xl mb-2 h-5 w-60 bg-neutral-300 animate-pulse rounded-md"></div>
                  <div className="font-bold text-2xl mb-2 h-5 w-32 bg-neutral-300 animate-pulse rounded-md"></div>
                  <section className="absolute -bottom-64  grid grid-cols-2 gap-4 lg:gap-2">
                    {[...Array(4)].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="h-40 bg-neutral-200 animate-pulse hover:bg-neutral-200 cursor-pointer transition-colors ease-in-out duration-300 rounded-lg shadow-sm w-[12 0px] md:w-32 lg:w-36"
                        >
                          <div className="flex  auto p-4 flex-col cursor-pointer  justify-between gap-y-4 text-neutral-500 hover:text-neutral-600 "></div>
                        </div>
                      );
                    })}
                  </section>
                </section>
              </div>
              <section className="w-full bg-neutral-200 animate-pulse  mb-10 px-8 py-7 rounded-md  shadow-md shadow-neutral-100 min-h-[520px] ">
                <div>
                  <div className="font-bold text-2xl mb-2 h-10 w-40 bg-neutral-300 animate-pulse rounded-md"></div>
                  <div className="font-bold text-2xl mb-2 h-4 w-56 bg-neutral-300 animate-pulse rounded-md"></div>
                  <div className="font-bold text-2xl mb-2 h-4 w-40 bg-neutral-300 animate-pulse rounded-md"></div>
                </div>
              </section>
            </div>
          </div>
          <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-200 animate-pulse min-h-[250px]  p-6 rounded-md shadow-sm">
                <div className="w-full">
                  <div>
                    <div className="w-full h-6 mb-3 bg-neutral-300 animate-pulse rounded-md"></div>
                    <div className="w-[20%] h-4 mb-6 bg-neutral-300 animate-pulse rounded-md"></div>
                    <div className="w-full h-28 mb-5 bg-neutral-300 animate-pulse rounded-md"></div>
                    <div className="w-[40%] h-8  bg-neutral-300 animate-pulse rounded-md"></div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-200 animate-pulse min-h-[250px]  p-6 rounded-md shadow-sm">
                <div className="w-full">
                  <div>
                    <div className="w-full h-6 mb-3 bg-neutral-300 animate-pulse rounded-md"></div>
                    <div className="w-[20%] h-4 mb-6 bg-neutral-300 animate-pulse rounded-md"></div>
                    <div className="w-full h-28 mb-5 bg-neutral-300 animate-pulse rounded-md"></div>
                    <div className="w-[40%] h-8  bg-neutral-300 animate-pulse rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
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
            {/* <DashboardCalendar /> */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default DashboardLoading;
