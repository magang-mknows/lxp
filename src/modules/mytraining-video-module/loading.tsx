import LayoutProvider from "@/providers/LayoutProvider";
import { FC, Fragment, ReactElement } from "react";

const Loading: FC = (): ReactElement => {
  return (
    <div className="w-full">
      <LayoutProvider>
        <div className="animate-pulse rounded-md bg-neutral-200 w-52 h-11 mx-auto my-6" />
        <div className="flex lg:flex-col h-full items-center px-4 lg:px-28">
          <div className="flex lg:flex-row flex-col w-full h-full gap-8">
            <div className="flex lg:w-[65%]">
              <div className="flex flex-col w-full h-auto gap-8 md:gap-4 justify-center items-center">
                <div className="youtube animate-pulse rounded-md bg-neutral-200 w-[55%] md:w-[820px] h-[500px] " />
                <div className="animate-pulse shadow-md rounded-lg lg:p-10 w-full h-full lg:h-[350px] ">
                  <h1 className="rounded-md bg-neutral-200 w-72 h-8" />
                  <div className="flex flex-col gap-1 my-6">
                    <div className="rounded-md bg-neutral-200 h-4 w-full" />
                    <div className="rounded-md bg-neutral-200 h-4 w-full" />
                    <div className="rounded-md bg-neutral-200 h-4 w-full" />
                    <div className="rounded-md bg-neutral-200 h-4 w-full" />
                    <div className="rounded-md bg-neutral-200 h-4 w-full" />
                    <div className="rounded-md bg-neutral-200 h-4 w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full shadow-lg rounded-lg p-6 gap-y-2 ">
              <div className="flex flex-col">
                <div className="animate-pulse rounded-md bg-neutral-200 h-8 w-[200px]" />
                <div className="animate-pulse flex items-center gap-y-4 gap-x-2 py-4">
                  <div className="rounded-full bg-neutral-200 h-9 w-9" />
                  <div className="rounded-md bg-neutral-200 h-5 w-[300px]" />
                </div>
              </div>
              <div className="animate-pulse flex flex-col">
                <div className="rounded-md bg-neutral-200 h-8 w-[200px]" />
                <div className="flex items-center gap-y-4 gap-x-2 py-4">
                  <div className="rounded-md bg-neutral-200 h-9 w-9" />
                  <div className="rounded-md bg-neutral-200 h-5 w-[300px]" />
                </div>
              </div>
              <div className="animate-pulse flex w-full justify-center items-center md:mt-[80px]">
                <div className="rounded-md bg-neutral-200 h-10 md:h-14 w-full md:w-[328px]" />
              </div>
            </div>
          </div>
        </div>
      </LayoutProvider>
    </div>
  );
};

export default Loading;
