import Image from "next/image";
import React, { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const AboutJobsThumb: FC<TCardContentProps> = ({ srcImg }): ReactElement => {
  return (
    <Image
      src={`${srcImg}`}
      alt="article-view"
      className="bg-neautral-50 cursor-pointer min-h-80 w-full bg-primary-400"
      height={850}
      width={850}
      loading="lazy"
    />
  );
};

export default AboutJobsThumb;
