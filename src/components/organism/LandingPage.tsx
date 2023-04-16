import { useForgotPopup } from "@/modules/auth/hooks/ForgotPassword/usePopupForgot";
import ArticleLoading from "@/modules/landing/loading/ArticleLoading";

import dynamic from "next/dynamic";
import { FC, Fragment, ReactElement, Suspense } from "react";
import Modal from "../atoms/Modal";
import ForgotPassword from "../moleculs/ForgotPassword";
import HeroLoading from "@/modules/landing/loading/HeroLoading";
import BenefitsLoading from "@/modules/landing/loading/BenefitsLoading";
import CatalogLoading from "@/modules/landing/loading/CatalogLoading";
import OfferLoading from "@/modules/landing/loading/OfferLoading";
import ParthnerLoading from "@/modules/landing/loading/ParthnerLoading";

const LandingHero = dynamic(() => import("../moleculs/LandingHero"), {
  ssr: false,
  loading: () => <HeroLoading />,
});
const LandingArticle = dynamic(() => import("../moleculs/LandingArticle"), {
  ssr: false,
  loading: () => <ArticleLoading />,
});
const LandingBenefits = dynamic(() => import("../moleculs/LandingBenefits"), {
  ssr: false,
  loading: () => <BenefitsLoading />,
});
const LandingCatalog = dynamic(() => import("../moleculs/LandingCatalog"), {
  ssr: false,
  loading: () => <CatalogLoading />,
});
const LandingOffer = dynamic(() => import("../moleculs/LandingOffer"), {
  ssr: false,
  loading: () => <OfferLoading />,
});
const LandingPartner = dynamic(() => import("../moleculs/LandingPartner"), {
  ssr: false,
  loading: () => <ParthnerLoading />,
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
