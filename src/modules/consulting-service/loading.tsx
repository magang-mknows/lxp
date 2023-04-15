import React, { FC, ReactElement } from "react";

const ConsultingAndServiceLoading: FC = (): ReactElement => {
  return (
    <section className="pt-[74px] lg:pt-[138px] bg-neutral-50/60  min-h-[100vh]">
      <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
        <div className="bg-neutral-200 animate-pulse rounded-md w-40 h-4"></div>
      </section>
      <div className="mt-2 md:mt-6 bg-neutral-200 animate-pulse lg:mt-14 relative mb-28 h-52 lg:h-64 rounded-md shadow-sm mx-8 md:mx-14 lg:mx-16 px-8 md:px-14 lg:px-16  flex flex-col justify-center items-center ">
        <div className="flex w-full justify-center">
          <div className="h-10 mb-2 bg-neutral-300 w-96 rounded-md animate-pulse"></div>
        </div>
        <div className="flex w-full justify-center">
          <div className="h-6 mb-2 bg-neutral-300 w-80 rounded-md animate-pulse"></div>
        </div>
      </div>
      <section className="px-8 md:px-14 lg:px-16 flex flex-wrap gap-20 justify-center mb-28">
        <div className="w-full md:w-[380px] lg:w-[320px] h-[370px] bg-neutral-200 animate-pulse rounded-md"></div>
        <div className="w-full md:w-[380px] lg:w-[320px] h-[370px] bg-neutral-200 animate-pulse rounded-md"></div>
      </section>
      <section className="px-8 md:px-14 lg:px-16 mb-14">
        <div className="text-2xl h-9 w-96 bg-neutral-200 animate-pulse rounded-md font-bold mb-2"></div>
        <div className="text-2xl h-4 w-72 bg-neutral-200 animate-pulse rounded-md font-bold mb-2"></div>
      </section>
    </section>
  );
};

export default ConsultingAndServiceLoading;
