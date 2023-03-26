import { AboutJobList } from "@/utils/const";
import Image from "next/image";
import { FC, Fragment, ReactElement } from "react";
import AboutJobsDetail from "../atoms/AboutJobsDetail";
import AboutJobsThumb from "../atoms/AboutJobsThumb";
import AboutJobsTitle from "../atoms/AboutJobsTitle";

const AboutJobs: FC = (): ReactElement => {
  return (
    <Fragment>
      <AboutJobsTitle />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 md:px-14 lg:px-16 mb-20">
        {AboutJobList.map((job, index) => {
          return (
            <section
              className="rounded-md flex flex-col justify-between overflow-hidden shadow-md"
              key={index}
            >
              <AboutJobsThumb srcImg={job.srcImg} />
              <AboutJobsDetail title={job.title} />
            </section>
          );
        })}
      </section>
    </Fragment>
  );
};

export default AboutJobs;
