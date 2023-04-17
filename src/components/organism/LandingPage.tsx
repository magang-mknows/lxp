import { useForgotPopup } from "@/modules/auth/hooks/ForgotPassword/usePopupForgot";
import ArticleLoading from "@/modules/landing/loading/ArticleLoading";
import { FC, Fragment, ReactElement, Suspense, lazy } from "react";
import Modal from "../atoms/Modal";
import ForgotPassword from "../moleculs/ForgotPassword";
import HeroLoading from "@/modules/landing/loading/HeroLoading";
import BenefitsLoading from "@/modules/landing/loading/BenefitsLoading";
import CatalogLoading from "@/modules/landing/loading/CatalogLoading";
import OfferLoading from "@/modules/landing/loading/OfferLoading";
import ParthnerLoading from "@/modules/landing/loading/ParthnerLoading";
import SuspenseError from "@/providers/SuspenseError";

const LandingHero = lazy(() => import("../moleculs/LandingHero"));
const LandingArticle = lazy(() => import("../moleculs/LandingArticle"));
const LandingBenefits = lazy(() => import("../moleculs/LandingBenefits"));
const LandingCatalog = lazy(() => import("../moleculs/LandingCatalog"));
const LandingOffer = lazy(() => import("../moleculs/LandingOffer"));
const LandingPartner = lazy(() => import("../moleculs/LandingPartner"));

const LandingPage: FC = (): ReactElement => {
  const { getForgotPopup, setForgotPopup } = useForgotPopup();
  return (
    <Fragment>
      <Modal withClose hasImage lookup={getForgotPopup} onClose={() => setForgotPopup(false)}>
        <Suspense>
          <ForgotPassword />
        </Suspense>
      </Modal>
      <SuspenseError loadingFallback={<HeroLoading />}>
        <LandingHero />
      </SuspenseError>
      <SuspenseError loadingFallback={<ParthnerLoading />}>
        <LandingPartner />
      </SuspenseError>
      <SuspenseError loadingFallback={<CatalogLoading />}>
        <LandingCatalog />
      </SuspenseError>
      <SuspenseError loadingFallback={<BenefitsLoading />}>
        <LandingBenefits />
      </SuspenseError>
      <SuspenseError loadingFallback={<ArticleLoading />}>
        <LandingArticle />
      </SuspenseError>
      <SuspenseError loadingFallback={<OfferLoading />}>
        <LandingOffer />
      </SuspenseError>
    </Fragment>
  );
};

export default LandingPage;
