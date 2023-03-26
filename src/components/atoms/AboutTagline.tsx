import { FC, Fragment, ReactElement } from "react";

const AboutTagline: FC = (): ReactElement => {
  return (
    <Fragment>
      <h1 className="text-neutral-900 py-28 h-full  text-5xl font-bold text-right">
        We Are Strong In “<span className="text-version3-500">Activity Based Learning</span>”
      </h1>
    </Fragment>
  );
};

export default AboutTagline;
