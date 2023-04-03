import Image from "next/image";
import { FC, ReactElement } from "react";

const LandingOfferThumb: FC = (): ReactElement => {
  return (
    <Image
      src={`/assets/landing/waiting.webp`}
      alt="offer-view"
      className=" w-full h-full relative z-20  "
      height={200}
      width={200}
      loading="lazy"
    />
  );
};

export default LandingOfferThumb;
