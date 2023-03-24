import Image from "next/image";
import { FC, ReactElement } from "react";

const LandingOfferThumb: FC = (): ReactElement => {
  return (
    <Image
      src={`/assets/landing/waiting.webp`}
      alt="offer-view"
      className=" w-full relative z-20  "
      height={1000}
      width={1000}
      loading="eager"
    />
  );
};

export default LandingOfferThumb;
