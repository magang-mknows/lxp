import { FC, ReactElement } from "react";

const CatalogLoading: FC = (): ReactElement => {
  return (
    <div className="px-8 md:px-14 lg:px-16 py-12 md:py-14 lg:py-16 xl:py-20 bg-neutral-100">
      <div className="flex items-center flex-col mb-10">
        <div className="h-9 w-44 bg-neutral-200 animate-pulse rounded-md mb-2 lg:mb-3"></div>
        <div className="h-4 w-full bg-neutral-200 animate-pulse rounded-md mb-2 lg:mb-3"></div>
        <div className="h-4 w-96 bg-neutral-200 animate-pulse rounded-md mb-2 lg:mb-3"></div>
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
};

export default CatalogLoading;
