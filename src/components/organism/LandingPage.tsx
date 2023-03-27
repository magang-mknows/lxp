import ArticleLoading from "@/modules/landing/ArticleLoading";
import BenefitsLoading from "@/modules/landing/BenefitsLoading";
import CatalogLoading from "@/modules/landing/CatalogLoading";
import HeroLoading from "@/modules/landing/HeroLoading";
import OfferLoading from "@/modules/landing/OfferLoading";
import ParthnerLoading from "@/modules/landing/ParthnerLoading";
import dynamic from "next/dynamic";
import { FC, Fragment, ReactElement, Suspense } from "react";

const LandingHero = dynamic(() => import("../moleculs/LandingHero"));
const LandingPartner = dynamic(() => import("../moleculs/LandingPartner"));
const LandingCatalog = dynamic(() => import("../moleculs/LandingCatalog"));
const LandingBenefits = dynamic(() => import("../moleculs/LandingBenefits"));
const LandingArticle = dynamic(() => import("../moleculs/LandingArticle"));
const LandingOffer = dynamic(() => import("../moleculs/LandingOffer"));

const LandingPage: FC = (): ReactElement => {
  return (
    <Fragment>
      <Suspense fallback={<HeroLoading />}>
        <LandingHero />
      </Suspense>
      <Suspense fallback={<ParthnerLoading />}>
        <LandingPartner />
      </Suspense>
      <Suspense fallback={<CatalogLoading />}>
        <LandingCatalog />
      </Suspense>
      <Suspense fallback={<BenefitsLoading />}>
        <LandingBenefits />
      </Suspense>
      <Suspense fallback={<ArticleLoading />}>
        <LandingArticle />
      </Suspense>
      <Suspense fallback={<OfferLoading />}>
        <LandingOffer />
      </Suspense>
    </Fragment>
  );
};

export default LandingPage;
