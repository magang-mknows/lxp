import Image from "next/image";
import { FC, ReactElement } from "react";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const LandingFooterIcons: FC = (): ReactElement => {
  return (
    <div className="flex justify-between flex-wrap gap-y-4 items-center">
      <div className="text-lg text-neutral-800 flex gap-x-6">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaInstagram />
      </div>
      <Image
        src={`/assets/landing/footerGPlay.svg`}
        alt="goolePlay-view"
        className=" w-[160px] -m-2"
        height={100}
        width={100}
        loading="eager"
      />
    </div>
  );
};

export default LandingFooterIcons;
