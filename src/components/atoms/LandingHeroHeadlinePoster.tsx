import Image from "next/image";
import { FC, ReactElement } from "react";

const LandingHeroHeadlinePoster: FC = (): ReactElement => {
  return (
    <div className="mt-10 md:mt-12 lg:mt-20 relative bottom-0">
      <Image
        src={"/assets/landing/leaderBoardImage.svg"}
        alt="leaderboard-view"
        className="w-[75px] md:w-[150px] lg:w-[220px] xl:w-[320px]   absolute -bottom-10 md:-bottom-16  lg:-bottom-40 -left-5 lg:-left-6"
        height={100}
        width={100}
        loading="eager"
      />
      <Image
        src={"/assets/landing/dashboardImage.svg"}
        alt="dashboard-view"
        className="w-[300px] md:w-[650px] lg:w-[800px] xl:w-[1100px]"
        height={100}
        width={100}
        loading="eager"
      />
      <Image
        src={"/assets/landing/eventImage.svg"}
        alt="event-view"
        className="w-[80px]  md:w-[220px] lg:w-[260px]  xl:w-[340px]  absolute bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-16 right-4  lg:right-6 xl:right-10"
        height={100}
        width={100}
        loading="eager"
      />
    </div>
  );
};

export default LandingHeroHeadlinePoster;
