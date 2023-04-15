"use client";
import { useForgotPopup } from "@/hooks/ForgotPassword/usePopupForgot";
import ArticleLoading from "@/modules/landing/loading/article-loading";
import BenefitsLoading from "@/modules/landing/loading/benefits-loading";
import CatalogLoading from "@/modules/landing/loading/catalog-loading";
import HeroLoading from "@/modules/landing/loading/hero-loading";
import OfferLoading from "@/modules/landing/loading/offer-loading";
import ParthnerLoading from "@/modules/landing/loading/parthner-loading";
import dynamic from "next/dynamic";
import { FC, Fragment, ReactElement, Suspense } from "react";
import Modal from "../atoms/Modal";
import ForgotPassword from "../moleculs/ForgotPassword";

const LandingPartner = dynamic(() => import("../moleculs/landing-partner"), {
  ssr: false,
  loading: () => <ParthnerLoading />,
});

const LandingHero = dynamic(() => import("../moleculs/landing-hero"), {
  ssr: false,
  loading: () => <HeroLoading />,
});
const LandingArticle = dynamic(() => import("../moleculs/landing-article"), {
  ssr: false,
  loading: () => <ArticleLoading />,
});
const LandingBenefits = dynamic(() => import("../moleculs/landing-benefits"), {
  ssr: false,
  loading: () => <BenefitsLoading />,
});
const LandingCatalog = dynamic(() => import("../moleculs/landing-catalog"), {
  ssr: false,
  loading: () => <CatalogLoading />,
});
const LandingOffer = dynamic(() => import("../moleculs/landing-offer"), {
  ssr: false,
  loading: () => <OfferLoading />,
});

const LandingPage: FC = (): ReactElement => {
  const { getForgotPopup, setForgotPopup } = useForgotPopup();
  return (
    <Fragment>
      <Modal withClose hasImage lookup={getForgotPopup} onClose={() => setForgotPopup(false)}>
        <Suspense>
          <ForgotPassword />
        </Suspense>
      </Modal>
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
