import { FC, Fragment, ReactElement } from "react";

const LandingOfferTitle: FC = (): ReactElement => {
  return (
    <Fragment>
      <h1 className="text-neutral-100 font-bold text-2xl md:text-3xl mb-3 md:mb-5">
        Tunggu apa lagi?
      </h1>
    </Fragment>
  );
};

export default LandingOfferTitle;
