import Image from "next/image";
import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";
import Link from "next/link";

const FeaturesCards: FC<TCardContentProps> = ({
  title,
  desc,
  isAvailable,
  srcImg,
  link,
}): ReactElement => {
  return (
    <div
      className={`${
        isAvailable ? "bg bg-neutral-50" : "bg-neutral-200"
      }  p-4 min-h-52 hover:bg-neutral-200 rounded-md shadow-sm transition-colors ease-in-out duration-300 cursor-pointer`}
    >
      <Link href={link ? (link as unknown as string) : ""} passHref>
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
      </Link>
    </div>
  );
};

export default FeaturesCards;
