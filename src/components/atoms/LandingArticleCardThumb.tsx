import Image from "next/image";
import React, { FC } from "react";
import { TImageIDProps } from "./types";

const LandingArticleCardThumb: FC<TImageIDProps> = ({ id, date }) => {
  return (
    <div>
      <Image
        src={`/assets/landing/article${id}.svg`}
        alt="article-view"
        className="bg-neautral-50 w-full mb-4"
        height={30}
        width={30}
        loading="eager"
      />
    </div>
  );
};

export default LandingArticleCardThumb;
