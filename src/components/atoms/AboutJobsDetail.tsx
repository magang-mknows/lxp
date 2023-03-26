import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const AboutJobsDetail: FC<TCardContentProps> = ({ title }): ReactElement => {
  return (
    <section className=" flex bg-version2-400 justify-center items-center py-5 h-full px-10">
      <h1 className="text-neutral-100 text-center font-bold text-lg">{title}</h1>
    </section>
  );
};

export default AboutJobsDetail;
