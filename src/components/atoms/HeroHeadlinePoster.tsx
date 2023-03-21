import Image from "next/image";
import { FC, ReactElement } from "react";

const HeadlinePoster: FC = (): ReactElement => {
  return (
    <div className="mt-20 relative bottom-0">
      <Image
        src={"/assets/landing/leaderBoardImage.svg"}
        alt="leaderboard-view"
        className="w-[300px] absolute -bottom-28 -left-10"
        height={100}
        width={100}
        loading="eager"
      />
      <Image
        src={"/assets/landing/dashboardImage.svg"}
        alt="dashboard-view"
        className="w-[1300px]"
        height={100}
        width={100}
        loading="eager"
      />
      <Image
        src={"/assets/landing/eventImage.svg"}
        alt="event-view"
        className="w-[400px] absolute bottom-16 right-10"
        height={100}
        width={100}
        loading="eager"
      />
    </div>
  );
};

export default HeadlinePoster;
