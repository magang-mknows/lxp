import { FC, Fragment, ReactElement } from "react";
import LandingArticle from "../moleculs/LandingArticle";
import LandingBenefits from "../moleculs/LandingBenefits";
import LandingCatalog from "../moleculs/LandingCatalog";
import LandingHero from "../moleculs/LandingHero";
import LandingOffer from "../moleculs/LandingOffer";
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
      <LandingArticle />
      <LandingOffer />
    </Fragment>
  );
};

export default LandingPage;
