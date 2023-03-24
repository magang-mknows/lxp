import Image from "next/image";
import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const AboutTestimonials: FC<TCardContentProps> = ({
  srcImg,
  subTitle,
  title,
  desc,
}): ReactElement => {
  return (
    <div className="bg-version2-400  h-[360px] lg:h-[420px] w-full lg:w-[340px] shadow-md">
      <div className="flex justify-center relative -top-14 ">
        <span className="h-32 w-32 rounded-full relative  block bg-version2-400">
          <Image
            src={srcImg as unknown as string}
            alt="article-view"
            className="bg-neautral-50 w-full mb-3"
            height={30}
            width={30}
            loading="lazy"
          />
        </span>
      </div>
      <section className="-mt-14 text-center mb-8">
        <h1 className="text-neutral-100 font-medium text-base">{title}</h1>
        <p className="text-neutral-200/90 text-sm">{subTitle}</p>
      </section>
      <section className="text-sm text-neutral-100 px-8 text-justify leading-6">
        <p>{desc}</p>
      </section>
    </div>
  );
};

export default AboutTestimonials;
