import { FC, Fragment, ReactElement } from "react";

const AboutJobsLoading: FC = (): ReactElement => {
  return (
    <Fragment>
      <section className="w-full flex justify-end px-8 md:px-14 lg:px-16 mb-10 mt-10">
        <div className="bg-neutral-200 rounded-md animate-pulse min-w-[200px] md:min-w-[250px] lg:min-w-[300px] flex justify-center py-3 h-16 mt-12"></div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 md:px-14 lg:px-16 mb-20">
        <div className="rounded-md flex flex-col justify-between overflow-hidden bg-neutral-200 animate-pulse shadow-md h-[400px] w-full"></div>
        <div className="rounded-md flex flex-col justify-between overflow-hidden bg-neutral-200 animate-pulse shadow-md h-[400px] w-full"></div>
        <div className="rounded-md flex flex-col justify-between overflow-hidden bg-neutral-200 animate-pulse shadow-md h-[400px] w-full"></div>
      </section>
    </Fragment>
  );
};

export default AboutJobsLoading;
