import { FC, Fragment, ReactElement } from "react";

const ContactLoading: FC = (): ReactElement => {
  return (
    <section className="pt-[74px] bg-neutral-100/70">
      <div className="px-8 md:px-14 lg:px-16 flex py-14 justify-center">
        <div className="bg-neutral-50 px-8 md:px-10 lg:px-10 xl:px-20 min-h-[740px] w-[1200px] py-10 md:py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-2">
          <section>
            <section className=" flex justify-center">
              <div className="w-40 h-11 bg-neutral-200 animate-pulse rounded-md"></div>
            </section>
            <section className="flex justify-center px-2  pt-10 md:pt-12 lg:pt-16 font-bold mb-4 ">
              <div className="bg-neutral-200 animate-pulse rounded-md h-6 w-36"></div>
            </section>
            <div className="px-2 text-sm md:text-base xl:px-16">
              <section>
                <div className="h-5 mb-2 w-16 bg-neutral-200 animate-pulse rounded-md"></div>
                <div className="h-5 w-32 bg-neutral-200 animate-pulse rounded-md mb-5"></div>
              </section>
              <section>
                <div className="h-5 mb-2 w-16 bg-neutral-200 animate-pulse rounded-md"></div>
                <div className="h-5 w-48 bg-neutral-200 animate-pulse rounded-md mb-5"></div>
              </section>
              <section>
                <div className="h-5 mb-2 w-16 bg-neutral-200 animate-pulse rounded-md"></div>
                <div className="h-5 w-80 bg-neutral-200 animate-pulse rounded-md mb-2"></div>
                <div className="h-5 w-72 bg-neutral-200 animate-pulse rounded-md"></div>
              </section>
            </div>
            <div className="px-2 text-lg text-neutral-800 flex justify-start lg:justify-center gap-x-6 py-10">
              <div className="w-8 h-8 bg-neutral-200 animate-pulse rounded-md"></div>
              <div className="w-8 h-8 bg-neutral-200 animate-pulse rounded-md"></div>
              <div className="w-8 h-8 bg-neutral-200 animate-pulse rounded-md"></div>
              <div className="w-8 h-8 bg-neutral-200 animate-pulse rounded-md"></div>
            </div>
          </section>
          <div>
            <section className="flex flex-col gap-2 mb-9 ">
              <div className="h-5 w-48 animate-pulse bg-neutral-200"></div>
              <div className="bg-neutral-200 animate-pulse rounded-md h-9 w-full"></div>
            </section>
            <section className="flex flex-col gap-2 mb-9 ">
              <div className="h-5 w-48 animate-pulse bg-neutral-200"></div>
              <div className="bg-neutral-200 animate-pulse rounded-md h-9 w-full"></div>
            </section>
            <section className="flex flex-col gap-2 mb-8 ">
              <div className="h-5 w-48 animate-pulse bg-neutral-200"></div>
              <div className="bg-neutral-200 animate-pulse rounded-md h-72 w-full"></div>
            </section>
            <div className="bg-neutral-200 animate-pulse rounded-md w-full h-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLoading;
