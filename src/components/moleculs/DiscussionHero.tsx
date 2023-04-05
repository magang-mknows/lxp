import { FC, ReactElement } from "react";

import Image from "next/image";
import DiscussionHeadline from "../atoms/DiscussionHeadline";

const DiscussionHero: FC = (): ReactElement => {
  return (
    <section className="px-8 md:px-14 lg:px-16 grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10">
      <DiscussionHeadline />
      <div className="order-1 md:order-2  w-full  flex justify-center ">
        <Image
          alt="discussionIcon"
          src={"/assets/disscussion-room/disscussion.svg"}
          height={80}
          width={500}
          className="w-80 md:w-96 lg:w-[500px]"
        />
      </div>
    </section>
  );
};

export default DiscussionHero;
