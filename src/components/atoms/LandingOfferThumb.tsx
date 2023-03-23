import Image from "next/image";
import { FC, ReactElement } from "react";

const LandingOfferThumb: FC = (): ReactElement => {
  return (
    <Image
      src={`/assets/landing/waiting.svg`}
      alt="offer-view"
      className=" w-full relative z-20  "
      height={100}
      width={100}
      loading="eager"
    />
  );
};

export default LandingOfferThumb;
