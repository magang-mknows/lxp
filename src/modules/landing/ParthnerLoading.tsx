import { FC, ReactElement } from "react";

const ParthnerLoading: FC = (): ReactElement => {
  return (
    <div className="bg-neutral-100 px-12 md:px-14 lg:px-20 xl:px-36 flex flex-wrap xl:flex-nowrap items-center justify-between py-20">
      <div className="flex flex-col gap-2 mb-8 xl:mb-0">
        <div className="bg-neutral-200 rounded-md animate-pulse h-6 w-44 mb-2"></div>
        <div className="bg-neutral-200 rounded-md animate-pulse h-12 w-96 mb-1"></div>
        <div className="bg-neutral-200 rounded-md animate-pulse h-12 w-72"></div>
      </div>
      <div className=" grid grid-cols-4 gap-0.5">
        {[...Array(8)].map((data, index) => {
          return (
            <div
              key={index}
              className="w-24 md:w-28 lg:w-32 overflow-hidden h-20 md:h-32 lg:h-32 bg-neutral-200 animate-pulse rounded-md "
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ParthnerLoading;
