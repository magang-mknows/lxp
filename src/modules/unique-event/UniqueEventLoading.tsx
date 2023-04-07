import React from "react";

const UniqueEventLoading = () => {
  return (
    <section className="pt-[74px] bg-neutral-50/60  min-h-[100vh]">
      <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
        <div className="bg-neutral-200 animate-pulse rounded-md w-40 h-4"></div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 px-8 md:px-14 lg:px-16 gap-20">
        <section className="col-span-2 lg:col-span-1">
          <div className="text-2xl bg-neutral-200 rounded-md animate-pulse h-8 font-bold text-neutral-900 mb-2"></div>
          <div className="text-sm h-4 bg-neutral-200 rounded-md animate-pulse text-neutral-600 mb-1"></div>
          <div className="text-sm h-4 w-[50%] bg-neutral-200 rounded-md animate-pulse text-neutral-600 mb-9"></div>

          <section className="  px-3 py-2 rounded-md shadow-sm">
            <div className="h-10 w-full bg-neutral-200 animate-pulse rounded-md mb-2"></div>
            <div className="h-10 w-full bg-neutral-200 animate-pulse rounded-md mb-2"></div>
            <div className="h-10 w-full bg-neutral-200 animate-pulse rounded-md"></div>
          </section>
        </section>

        <section className="col-span-2">
          <div className="w-full mb-8 bg-neutral-200 animate-pulse h-10 items-center px-3 py-3 rounded-md shadow-sm flex gap-2"></div>
          <section className="grid gap-10 grid-cols-2">
            <div className="bg-neutral-200 animate-pulse rounded-md w-full h-60 md:h-80"></div>
            <div className="bg-neutral-200 animate-pulse rounded-md w-full h-60 md:h-80"></div>
            <div className="bg-neutral-200 animate-pulse rounded-md w-full h-60 md:h-80"></div>
            <div className="bg-neutral-200 animate-pulse rounded-md w-full h-60 md:h-80"></div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default UniqueEventLoading;
