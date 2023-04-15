import { FC, Fragment, ReactElement } from "react";
import { TCardContentProps } from "./types";

const LandingCatalogContentTitle: FC<TCardContentProps> = ({ title }): ReactElement => {
  return (
    <Fragment>
      <h1 className="mb-2 text-neutral-900 px-5 text-sm md:text-base py-2 font-bold">{title}</h1>
    </Fragment>
  );
};

export default LandingCatalogContentTitle;
