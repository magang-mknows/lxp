import { FC, ReactElement } from "react";

const AboutTagline: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 pt-6 md:pt-8 mb-5 lg:mb-10 ">
      <h1 className="px-8 md:px-14 lg:px-16 text-neutral-900 py-20 h-full text-3xl md:text-4xl font-bold text-left">
        We Are Strong In “<span className="text-version3-500">Activity Based Learning</span>”
      </h1>
    </div>
  );
};

export default AboutTagline;
