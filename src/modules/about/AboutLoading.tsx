import { FC, ReactElement } from "react";

const AboutLoading: FC = (): ReactElement => {
  return (
    <section className="pt-[74px] bg-neutral-100/70">
      <div className="bg-neutral-200 animate-pulse bg-no-repeat px-8 md:px-14 lg:px-16 bg-center bg-cover  min-h-[80vh] grid grid-cols-1 lg:grid-cols-3 pt-20 lg:pt-4 shadow-md ">
        <div className=" lg:col-span-2 col-span-3 flex flex-col justify-center mt-2">
          <div className="bg-neutral-300 rounded-md animate-pulse h-16 mb-2 w-[720px]"></div>
          <div className="bg-neutral-300 rounded-md animate-pulse h-16 mb-2 w-[500px]"></div>
          <div className="bg-neutral-300 rounded-md animate-pulse h-16 mb-2 w-[400px]"></div>
        </div>
        <div className="bg-neutral-300  lg:pt-16 relative top-14 lg:top-[36%] py-14 px-5 md:px-6 lg:px-8 text-sm font-medium h-[460px]  "></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-6 md:pt-8 mb-5 lg:mb-10 ">
        <section className="px-8 md:px-14 lg:px-16 py-20 ">
          <div className="h-9 w-96 bg-neutral-200 animate-pulse rounded-md mb-3"></div>
          <div className="h-9 w-80 bg-neutral-200 animate-pulse rounded-md"></div>
        </section>
      </div>
      <section className="mb-4 md:mb-8 lg:mb-10 w-full pb-4 -mt-10  px-8 md:px-14 lg:px-16 ">
        <section className=" flex gap-10 gap-y-20 w-[100%] overflow-visible scrollbar-hide overflow-x-scroll">
          <div className=" h-[400px] lg:min-h-[380px] w-[340px] flex-shrink-0 bg-neutral-200 animate-pulse rounded-md"></div>
          <div className=" h-[400px] lg:min-h-[380px] w-[340px] flex-shrink-0 bg-neutral-200 animate-pulse rounded-md"></div>
          <div className=" h-[400px] lg:min-h-[380px] w-[340px] flex-shrink-0 bg-neutral-200 animate-pulse rounded-md"></div>
          <div className=" h-[400px] lg:min-h-[380px] w-[340px] flex-shrink-0 bg-neutral-200 animate-pulse rounded-md"></div>
        </section>
      </section>
      <section className="w-full flex justify-end px-8 md:px-14 lg:px-16 mb-10 mt-10">
        <div className="bg-neutral-200 rounded-md animate-pulse min-w-[200px] md:min-w-[250px] lg:min-w-[300px] flex justify-center py-3 h-16 mt-12"></div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 md:px-14 lg:px-16 mb-20">
        <div className="rounded-md flex flex-col justify-between overflow-hidden bg-neutral-200 animate-pulse shadow-md h-[400px] w-full"></div>
        <div className="rounded-md flex flex-col justify-between overflow-hidden bg-neutral-200 animate-pulse shadow-md h-[400px] w-full"></div>
        <div className="rounded-md flex flex-col justify-between overflow-hidden bg-neutral-200 animate-pulse shadow-md h-[400px] w-full"></div>
      </section>
    </section>
  );
};

export default AboutLoading;
