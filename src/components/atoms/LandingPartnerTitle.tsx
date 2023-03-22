import { FC, Fragment, ReactElement } from "react";

const LandingPartnerTitle: FC = (): ReactElement => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-version2-200 ">OUR PARTNER</p>
      <h1 className="text-4xl pr-96  font-bold text-neutral-50">Learn with Our Partners</h1>
    </div>
  );
};

export default LandingPartnerTitle;
