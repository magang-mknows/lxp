import { FC, Fragment, ReactElement } from "react";
import LandingBenefits from "../moleculs/LandingBenefits";
import LandingCatalog from "../moleculs/LandingCatalog";
import LandingHero from "../moleculs/LandingHero";
import LandingPartner from "../moleculs/LandingPartner";
import Navbar from "../moleculs/Navbar";

const LandingPage: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <LandingHero />
      <LandingPartner />
      <LandingCatalog />
      <LandingBenefits />
    </Fragment>
  );
};

export default LandingPage;
