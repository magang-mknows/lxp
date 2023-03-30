import { FC, ReactElement } from "react";

const CareerConsultingLoading: FC = (): ReactElement => {
  return (
    <section className="pt-[74px] bg-neutral-50/60  min-h-[100vh]">
      <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
        <div className="bg-neutral-200 animate-pulse rounded-md w-40 h-4"></div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 px-8 md:px-14 lg:px-16">
        <div className="px-0 md:px-5 bg-neutral-200 animate-pulse rounded-md lg:px-6 mb-10 min-h-[20vh]"></div>
        <div className="col-span-2 bg-neutral-200 animate-pulse rounded-md px-20 min-h-[80vh]"></div>
      </section>
    </section>
  );
};

export default CareerConsultingLoading;
