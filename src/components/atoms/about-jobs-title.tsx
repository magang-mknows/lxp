import { FC, ReactElement } from "react";

const AboutJobsTitle: FC = (): ReactElement => {
  return (
    <section className="w-full flex justify-end px-8 md:px-14 lg:px-16 mb-10">
      <div className="bg-version2-400 min-w-[200px] md:min-w-[250px] lg:min-w-[300px] flex justify-center py-3 ">
        <h1 className="text-neutral-200 text-2xl md:text-3xl lg:text-4xl font-bold">
          What <span className="text-version3-500">We Do</span>
        </h1>
      </div>
    </section>
  );
};

export default AboutJobsTitle;
