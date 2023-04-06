import { FC, ReactElement } from "react";

const DiscussionRoomLoading: FC = (): ReactElement => {
  return (
    <section className="pt-[74px] bg-neutral-50/60  min-h-[100vh]">
      <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
        <div className="bg-neutral-200 animate-pulse rounded-md w-52 h-4"></div>
      </section>
      {/* <DiscussionHero /> */}
      <section className="px-8 md:px-14 lg:px-16 grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10">
        <div className="order-2 md:order-1 flex flex-col z-10 relative  w-full h-full items-center justify-center ">
          <h1 className="lg:text-5xl text-3xl  md:text-4xl font-black md:text-left lg:text-center relative -z-10 mb-2">
            Ruang Diskusi
            <span className="block absolute -left-4 -z-20 -top-4 h-10 w-10 text-neutral-900 rounded-full bg-version2-200"></span>
          </h1>
          <p className="md:text-sm text-center  text-xs  text-neutral-600 tracking-wide  lg:text-center">
            Bahas topik yang ingin anda diskusikan disini
          </p>
        </div>
        <div className="order-1 md:order-2  w-full  flex justify-center ">
          <div className="bg-neutral-200 rounded-md animate-pulse lg:h-96 h-72 w-80 md:w-96 lg:w-[500px]"></div>
          {/* <Image
            alt="discussionIcon"
            src={"/assets/disscussion-room/disscussion.svg"}
            height={80}
            width={500}
            className="w-80 md:w-96 lg:w-[500px]"
          /> */}
        </div>
      </section>
      {/* <DiscussionContent /> */}
    </section>
  );
};

export default DiscussionRoomLoading;
