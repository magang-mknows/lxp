import Image from "next/image";
import { FC, Fragment, ReactElement } from "react";
import { TImageIDProps } from "./types";

const LandingCatalogThumb: FC<TImageIDProps> = ({ id }): ReactElement => {
  return (
    <Fragment>
      <Image
        src={`/assets/landing/catalog${id}.svg`}
        alt="catalog-view"
        className=" bg-neautral-50 w-full "
        height={100}
        width={100}
        loading="lazy"
      />
    </Fragment>
  );
};

export default LandingCatalogThumb;
