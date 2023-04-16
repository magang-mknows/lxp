import React, { FC, ReactElement } from "react";

const BenefitsLoading: FC = (): ReactElement => {
  return (
    <div className="px-8 md:px-14 lg:px-16 bg-neutral-100">
      <section className="px-8 md:px-14 lg:px-16 py-12 rounded-lg  bg-neutral-100 grid col-span-1 lg:grid-cols-3 gap-6 items-center">
        <section className="flex flex-col">
          <div className="text-3xl lg:text-4xl h-10 w-96 bg-neutral-200 animate-pulse rounded-md mb-2"></div>
          <div className="text-3xl lg:text-4xl h-10 w-80 bg-neutral-200 animate-pulse rounded-md"></div>
        </section>
        <section className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 py-6 md:py-8 lg:py-10">
          <div className="text-neutral-50  h-fit">
            <div className="text-3xl lg:text-4xl h-4 w-44 bg-neutral-200 animate-pulse rounded-md mb-2"></div>
            <div className="text-3xl lg:text-4xl h-3 w-96 bg-neutral-200 animate-pulse rounded-md mb-1"></div>
            <div className="text-3xl lg:text-4xl h-3 w-96 bg-neutral-200 animate-pulse rounded-md mb-1"></div>
            <div className="text-3xl lg:text-4xl h-3 w-96 bg-neutral-200 animate-pulse rounded-md mb-1"></div>
          </div>
          <div className="text-neutral-50  h-fit">
            <div className="text-3xl lg:text-4xl h-4 w-44 bg-neutral-200 animate-pulse rounded-md mb-2"></div>
            <div className="text-3xl lg:text-4xl h-3 w-96 bg-neutral-200 animate-pulse rounded-md mb-1"></div>
            <div className="text-3xl lg:text-4xl h-3 w-96 bg-neutral-200 animate-pulse rounded-md mb-1"></div>
            <div className="text-3xl lg:text-4xl h-3 w-96 bg-neutral-200 animate-pulse rounded-md mb-1"></div>
          </div>
          <div className="text-neutral-50  h-fit">
            <div className="text-3xl lg:text-4xl h-4 w-44 bg-neutral-200 animate-pulse rounded-md mb-2"></div>
            <div className="text-3xl lg:text-4xl h-3 w-96 bg-neutral-200 animate-pulse rounded-md mb-1"></div>
            <div className="text-3xl lg:text-4xl h-3 w-96 bg-neutral-200 animate-pulse rounded-md mb-1"></div>
            <div className="text-3xl lg:text-4xl h-3 w-96 bg-neutral-200 animate-pulse rounded-md mb-1"></div>
          </div>
          <div className="text-neutral-50  h-fit">
            <div className="text-3xl lg:text-4xl h-4 w-44 bg-neutral-200 animate-pulse rounded-md mb-2"></div>
            <div className="text-3xl lg:text-4xl h-3 w-96 bg-neutral-200 animate-pulse rounded-md mb-1"></div>
            <div className="text-3xl lg:text-4xl h-3 w-96 bg-neutral-200 animate-pulse rounded-md mb-1"></div>
            <div className="text-3xl lg:text-4xl h-3 w-96 bg-neutral-200 animate-pulse rounded-md mb-1"></div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default BenefitsLoading;
