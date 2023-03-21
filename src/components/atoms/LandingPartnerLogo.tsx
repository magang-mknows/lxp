import Image from "next/image";
import { FC, ReactElement } from "react";
import { TImageIDProps } from "./types";

const LandingPartnerLogo: FC<TImageIDProps> = ({ id }): ReactElement => {
  return (
    <Image
      src={`/assets/landing/brand${id}.svg`}
      alt="dashboard-view"
      className="w-44 h-36 bg-neautral-50 "
      height={30}
      width={30}
      loading="eager"
    />
  );
};

export default LandingPartnerLogo;