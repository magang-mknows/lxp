import dynamic from "next/dynamic";
import { FC, Fragment, ReactElement } from "react";
import LandingArticle from "../moleculs/LandingArticle";
import LandingBenefits from "../moleculs/LandingBenefits";
import LandingCatalog from "../moleculs/LandingCatalog";
import LandingFooter from "../moleculs/LandingFooter";
import LandingHero from "../moleculs/LandingHero";
import LandingOffer from "../moleculs/LandingOffer";
import LandingPartner from "../moleculs/LandingPartner";

const Navbar = dynamic(() => import("../moleculs/Navbar"), {
  ssr: false,
});

const LandingPage: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <section className="pt-16 bg-neutral-100">
        <LandingHero />
        <LandingPartner />
        <LandingCatalog />
        <LandingBenefits />
        <LandingArticle />
        <LandingOffer />
        <LandingFooter />
      </section>
    </Fragment>
  );
};

export default LandingPage;
