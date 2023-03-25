import { FC, ReactElement } from "react";

const OfferLoading: FC = (): ReactElement => {
  return (
    <div className="px-8 md:px-14 lg:px-16 bg-neutral-100 ">
      <section className="bg-neutral-100 rounded-md px-8 md:px-14 lg:px-16 pt-12 md:pb-12 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 lg:-gap-3 item-center">
        <section className="col-span-1 lg:col-span-2 flex justify-center flex-col">
          <div className="bg-neutral-200 w-72 animate-pulse mb-6 h-9"></div>

          <div className="bg-neutral-200 w-96 animate-pulse h-6 mb-2"></div>
          <div className="bg-neutral-200 w-44 animate-pulse h-6 mb-6"></div>
          <div className="bg-neutral-200 w-80 animate-pulse h-14"></div>
        </section>
        <section className="relative">
          {/* <LandingOfferThumb /> */}
          <div className="bg-neutral-200 absolute h-[100%] w-[90%] rounded-md -top-2 z-10 -right-2 lg:-right-6"></div>
        </section>
      </section>
    </div>
  );
};

export default OfferLoading;
