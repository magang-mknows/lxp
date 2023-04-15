import React, { FC, ReactElement } from "react";

const DocumentFormLoading: FC = (): ReactElement => {
  return (
    <div className="mx-8 md:mx-16 lg:mx-40 my-10 bg-neutral-50 rounded-md shadow-sm min-h-[80vh]">
      <div className="px-8 md:px-14 lg:px-16 py-6 md:py-12 lg:py-14 w-full ">
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <div className="col-span-1 mb-1">
            <div className="w-24 h-8 bg-neutral-200 rounded-md animate-pulse"></div>
          </div>
          <div className="col-span-3 ">
            <div className="w-full h-10 bg-neutral-200 rounded-md animate-pulse"></div>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <div className="col-span-1 mb-1">
            <div className="w-24 h-8 bg-neutral-200 rounded-md animate-pulse"></div>
          </div>
          <div className="col-span-3 ">
            <div className="w-full h-10 bg-neutral-200 rounded-md animate-pulse"></div>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <div className="col-span-1 mb-1">
            <div className="w-24 h-8 bg-neutral-200 rounded-md animate-pulse"></div>
          </div>
          <div className="col-span-3 ">
            <div className="w-full h-10 bg-neutral-200 rounded-md animate-pulse"></div>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <div className="col-span-1 mb-1">
            <div className="w-24 h-8 bg-neutral-200 rounded-md animate-pulse"></div>
          </div>
          <div className="col-span-3 ">
            <div className="w-full h-28 bg-neutral-200 rounded-md animate-pulse"></div>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <div className="col-span-1 mb-1">
            <div className="w-24 h-8 bg-neutral-200 rounded-md animate-pulse"></div>
          </div>
          <div className="col-span-3 ">
            <div className="w-full h-10 bg-neutral-200 rounded-md animate-pulse"></div>
          </div>
        </section>
        <div className="w-full flex justify-start lg:justify-end mb-2 mt-14">
          <div className="text-2xl text-neutral-900 font-bold h-9 w-52 rounded-md bg-neutral-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default DocumentFormLoading;
