import { FC, Fragment, ReactElement } from "react";

const LandingBenefitsTitle: FC = (): ReactElement => {
  return (
    <Fragment>
      <h1 className="text-3xl lg:text-4xl text-neutral-50 font-bold  lg:leading-[44px]">
        Satu Aplikasi Untuk <span className="text-version2-500">Beragam Kebutuhan</span>
      </h1>
    </Fragment>
  );
};

export default LandingBenefitsTitle;
