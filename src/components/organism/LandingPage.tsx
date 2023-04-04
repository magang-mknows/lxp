"use client";
import { useForgotPopup } from "@/hooks/ForgotPassword/usePopupForgot";
import { useLoginPopup } from "@/hooks/Login/usePopupLogin";
import ArticleLoading from "@/modules/landing/ArticleLoading";
import BenefitsLoading from "@/modules/landing/BenefitsLoading";
import CatalogLoading from "@/modules/landing/CatalogLoading";
import HeroLoading from "@/modules/landing/HeroLoading";
import OfferLoading from "@/modules/landing/OfferLoading";
import ParthnerLoading from "@/modules/landing/ParthnerLoading";
import { FC, Fragment, lazy, ReactElement, Suspense } from "react";
import Modal from "../atoms/Modal";
import ForgotPassword from "../moleculs/ForgotPassword";
import LoginForm from "../moleculs/LoginForm";

const LandingHero = lazy(() => import("../moleculs/LandingHero"));
const LandingOffer = lazy(() => import("../moleculs/LandingOffer"));
const LandingPartner = lazy(() => import("../moleculs/LandingPartner"));
const LandingCatalog = lazy(() => import("../moleculs/LandingCatalog"));
const LandingArticle = lazy(() => import("../moleculs/LandingArticle"));
const LandingBenefits = lazy(() => import("../moleculs/LandingBenefits"));

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
