import Image from "next/image";
import { FC, ReactElement } from "react";

const LandingOfferThumb: FC = (): ReactElement => {
  return (
    <div className="bg-version2-200 rounded-md w-[450px] h-[300px] relative">
      <Image
        src={`/assets/landing/waiting.svg`}
        alt="offer-view"
        className=" w-[450px]  absolute -left-6 top-6"
        height={100}
        width={100}
        loading="eager"
      />
    </div>
  );
};

export default LandingOfferThumb;
