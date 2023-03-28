import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const AboutJobsDetail: FC<TCardContentProps> = ({ title, addtionalClass }): ReactElement => {
  return (
    <section className={` ${addtionalClass} flex justify-center items-center py-5 h-20 px-10`}>
      <h1 className=" text-center font-bold text-lg">{title}</h1>
    </section>
  );
};

export default AboutJobsDetail;
