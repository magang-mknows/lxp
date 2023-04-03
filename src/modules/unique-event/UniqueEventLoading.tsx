import React, { FC, ReactElement } from "react";

const UniqueEventLoading: FC = (): ReactElement => {
  return (
    <section className="pt-[74px] bg-neutral-50/60  min-h-[100vh]">
      <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
        <div className="bg-neutral-200 animate-pulse rounded-md w-40 h-4"></div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 px-8 md:px-14 lg:px-16 gap-20">
        <section className="col-span-1">
          <div className="h-8 w-40 bg-neutral-200 animate-pulse rounded-md mb-4"></div>
          <div className="h-4 w-60 bg-neutral-200 animate-pulse rounded-md mb-2"></div>
          <div className="h-4 w-20 bg-neutral-200 animate-pulse rounded-md mb-9"></div>
          <div className="bg-neutral-200 min-h-[140px] animate-pulse px-3 py-3 rounded-md shadow-sm"></div>
        </section>
        <section className="col-span-2">
          {/* <UniqueEventSearch /> */}
          {/* <UniqueEventContent /> */}
        </section>
      </section>
    </section>
  );
};

export default UniqueEventLoading;
