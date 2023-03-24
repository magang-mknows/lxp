import Image from "next/image";
import React, { FC } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { TImageIDProps } from "./types";

const LandingArticleCardThumb: FC<TImageIDProps> = ({ id, date }) => {
  return (
    <div className="relative">
      <Image
        src={`/assets/landing/article${id}.svg`}
        alt="article-view"
        className="bg-neautral-50 w-full mb-3"
        height={30}
        width={30}
        loading="lazy"
      />
      <div className="bg-neutral-100 flex items-center gap-2 absolute bottom-3 text-sm left-4  px-4 py-1 rounded-md w-fit">
        <BsCalendarDate className="text-version3-500" />
        <p className="text-neutral-900 font-medium">Februari 21, 2023</p>
      </div>
    </div>
  );
};

export default LandingArticleCardThumb;
