import { FC, ReactElement } from "react";

const UniqueEventDetailLoading: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60  min-h-[100vh]">
      <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
        <div className="bg-neutral-200 animate-pulse rounded-md w-40 h-4"></div>
      </section>
      <section className="px-8 md:px-14 lg:px-16">
        {/* <EventDetailBanner /> */}
        <section className="lg:flex block gap-36 mb-10">
          <div className="w-full lg:w-[720px] h-56 md:h-[27rem] lg:h-[25rem] bg-neutral-200 animate-pulse rounded-md"></div>
          <div className="py-4">
            <div className="w-96 h-8 bg-neutral-200 mb-10 rounded-md animate-pulse"></div>
            <div className="w-52 h-6 bg-neutral-200 mb-4 rounded-md animate-pulse"></div>
            <div className="w-40 h-4 bg-neutral-200 mb-2 rounded-md animate-pulse"></div>
            <div className="w-40 h-4 bg-neutral-200 mb-2 rounded-md animate-pulse"></div>
            <div className="w-40 h-4 bg-neutral-200 mb-36 rounded-md animate-pulse"></div>
            <div className="w-96 h-10 bg-neutral-200 rounded-md animate-pulse"></div>
          </div>
        </section>
        {/* <EventDetailTab /> */}
      </section>
    </section>
  );
};

export default UniqueEventDetailLoading;
