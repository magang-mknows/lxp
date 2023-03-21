import { FC, ReactElement } from "react";
import LandingCatalogDesc from "../atoms/LandingCatalogDesc";
import LandingCatalogTitle from "../atoms/LandingCatalogTitle";
import LandingCatalogCard from "./LandingCatalogCard";

const LandingCatalog: FC = (): ReactElement => {
  return (
    <div className="px-16 py-20 bg-neautral-100">
      <LandingCatalogTitle />
      <LandingCatalogDesc />
      <LandingCatalogCard />
    </div>
  );
};

export default LandingCatalog;
