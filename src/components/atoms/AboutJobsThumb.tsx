import Image from "next/image";
import React, { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const AboutJobsThumb: FC<TCardContentProps> = ({ srcImg }): ReactElement => {
  return (
    <Image
      src={`${srcImg}`}
      alt="article-view"
      className="bg-neautral-50 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 w-full bg-primary-400"
      height={900}
      width={900}
      loading="eager"
    />
  );
};

export default AboutJobsThumb;
