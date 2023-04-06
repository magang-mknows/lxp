import { FC, ReactElement } from "react";

const DiscussionRoomLoading: FC = (): ReactElement => {
  return (
    <section className="pt-[74px] bg-neutral-50/60  min-h-[100vh]">
      <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
        <div className="bg-neutral-200 animate-pulse rounded-md w-52 h-4"></div>
      </section>
      <section className="px-8 md:px-14 lg:px-16 grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10">
        <div className="order-2 my-8 md:order-1 flex flex-col z-10 relative  w-full h-full items-center justify-center ">
          <div className="h-12 w-80 bg-neutral-200 animate-pulse rounded-md  md:text-4xl font-black md:text-left lg:text-center relative -z-10 mb-2"></div>
          <div className="md:text-sm text-center h-8 w-96 bg-neutral-200 animate-pulse roun  text-xs  text-neutral-600 tracking-wide  lg:text-center"></div>
        </div>
        <div className="order-1 md:order-2 w-full  flex justify-center ">
          <div className="bg-neutral-200 rounded-md animate-pulse lg:h-[440px] h-72 w-80 md:w-96 lg:w-[500px]"></div>
        </div>
      </section>
    </section>
  );
};

export default DiscussionRoomLoading;
