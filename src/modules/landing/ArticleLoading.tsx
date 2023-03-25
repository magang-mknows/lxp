import React, { FC, ReactElement } from "react";

const ArticleLoading: FC = (): ReactElement => {
  return (
    <div className="px-8 md:px-14 lg:px-16 py-12 md:py-14 lg:py-16 xl:py-20 bg-neutral-100">
      <div className="bg-neutral-200 w-72 animate-pulse mb-4 md:mb-5 lg:mb-8 xl:mb-8 h-9"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mb-6 md:mb-8 lg:mb-10 xl:mb-14">
        <section>
          <div className="w-full bg-neutral-200 animate-pulse rounded-md h-[280px] mb-2"></div>
          <div className="w-full bg-neutral-200 animate-pulse rounded-md h-5 mb-2"></div>
          <div className="w-full bg-neutral-200 animate-pulse rounded-md h-5"></div>
        </section>
        <section>
          <div className="w-full bg-neutral-200 animate-pulse rounded-md h-[280px] mb-2"></div>
          <div className="w-full bg-neutral-200 animate-pulse rounded-md h-5 mb-2"></div>
          <div className="w-full bg-neutral-200 animate-pulse rounded-md h-5"></div>
        </section>
        <section>
          <div className="w-full bg-neutral-200 animate-pulse rounded-md h-[280px] mb-2"></div>
          <div className="w-full bg-neutral-200 animate-pulse rounded-md h-5 mb-2"></div>
          <div className="w-full bg-neutral-200 animate-pulse rounded-md h-5"></div>
        </section>
      </div>
      <div className="w-full flex items-center justify-center md:justify-start lg:justify-center">
        <div className="h-10 w-44 bg-neutral-200 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
};

export default ArticleLoading;
