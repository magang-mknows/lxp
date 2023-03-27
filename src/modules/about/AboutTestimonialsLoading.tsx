import { FC, Fragment, ReactElement } from "react";

const AboutTestimonialsLoading: FC = (): ReactElement => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default AboutTestimonialsLoading;
