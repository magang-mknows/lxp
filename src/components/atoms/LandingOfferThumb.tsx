import Image from "next/image";
import { FC, ReactElement } from "react";

const LandingOfferThumb: FC = (): ReactElement => {
  return (
    <div className="bg-version2-200 rounded-md w-full h-[140px] md:h-[160px] lg:h-[200px] xl:h-[240px] relative">
      <Image
        src={`/assets/landing/waiting.svg`}
        alt="offer-view"
        className=" w-full  absolute -left-6 top-2 "
        height={30}
        width={30}
        loading="eager"
      />
    </div>
  );
};

export default LandingOfferThumb;
