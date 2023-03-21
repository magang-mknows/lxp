import Image from "next/image";
import { FC, Fragment, ReactElement } from "react";
import { TImageIDProps } from "./types";

const LandingCatalogThumb: FC<TImageIDProps> = ({ id }): ReactElement => {
  return (
    <Fragment>
      <Image
        src={`/assets/landing/catalog${id}.svg`}
        alt="dashboard-view"
        className=" bg-neautral-50 w-full "
        height={30}
        width={30}
        loading="eager"
      />
    </Fragment>
  );
};

export default LandingCatalogThumb;
