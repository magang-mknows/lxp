"use client";
import { useForgotPopup } from "@/hooks/ForgotPassword/usePopupForgot";
import { useLoginPopup } from "@/hooks/Login/usePopupLogin";
import ArticleLoading from "@/modules/landing/ArticleLoading";
import BenefitsLoading from "@/modules/landing/BenefitsLoading";
import CatalogLoading from "@/modules/landing/CatalogLoading";
import HeroLoading from "@/modules/landing/HeroLoading";
import OfferLoading from "@/modules/landing/OfferLoading";
import ParthnerLoading from "@/modules/landing/ParthnerLoading";
import { FC, Fragment, ReactElement, Suspense } from "react";
import Modal from "../atoms/Modal";
import ForgotPassword from "../moleculs/ForgotPassword";
import LandingArticle from "../moleculs/LandingArticle";
import LandingBenefits from "../moleculs/LandingBenefits";
import LandingCatalog from "../moleculs/LandingCatalog";
import LandingHero from "../moleculs/LandingHero";
import LandingOffer from "../moleculs/LandingOffer";
import LandingPartner from "../moleculs/LandingPartner";
import LoginForm from "../moleculs/LoginForm";

const LandingPage: FC = (): ReactElement => {
  const { getLoginPopup, setLoginPopup } = useLoginPopup();
  const { getForgotPopup, setForgotPopup } = useForgotPopup();
  return (
    <Fragment>
      <Modal withClose hasImage lookup={getLoginPopup} onClose={() => setLoginPopup(false)}>
        <Suspense>
          <LoginForm />
        </Suspense>
      </Modal>
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
