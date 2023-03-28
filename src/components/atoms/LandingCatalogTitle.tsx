import { FC, Fragment, ReactElement } from "react";

const LandingCatalogTitle: FC = (): ReactElement => {
  return (
    <Fragment>
      <h1 className="font-bold  text-neutral-900 text-2xl md:text-3xl text-center mb-2 lg:mb-3">
        Konten Katalog
      </h1>
    </Fragment>
  );
};

export default LandingCatalogTitle;
