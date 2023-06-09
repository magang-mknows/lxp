import { FC, ReactElement } from "react";

const LandingPartnerTitle: FC = (): ReactElement => {
  return (
    <div className="flex flex-col gap-2 mb-8 xl:mb-0">
      <p className="text-sm text-version2-200 ">OUR PARTNER</p>
      <h1 className="text-2xl md:text-3xl lg:text-4xl pr-32 md:pr-36 lg:pr-80 font-bold text-neutral-50">
        Learn with Our Partners
      </h1>
    </div>
  );
};

export default LandingPartnerTitle;
