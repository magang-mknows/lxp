import Image from "next/image";
import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const FeaturesCards: FC<TCardContentProps> = ({ title, desc, srcImg }): ReactElement => {
  return (
    <div className="bg-neutral-50 p-4 min-h-52">
      <Image
        src={srcImg as unknown as string}
        alt="feature-view"
        className="bg-neautral-50 h-12 w-12 mb-2"
        height={30}
        width={30}
        loading="lazy"
      />
      <h1 className="font-bold mb-2 text-base text-neutral-900">{title}</h1>
      <p className="text-sm text-neutral-600">{desc}</p>
    </div>
  );
};

export default FeaturesCards;
