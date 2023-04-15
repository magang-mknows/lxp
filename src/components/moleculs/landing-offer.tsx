import { FC, ReactElement } from "react";
import Button from "../atoms/button";
import LandingOfferDesc from "../atoms/landing-offer-desc";
import LandingOfferTitle from "../atoms/landing-offer-title";
import LandingOfferThumb from "../atoms/landing-offer-thumb";

const LandingOffer: FC = (): ReactElement => {
  return (
    <div className="px-8 md:px-14 lg:px-16 bg-neutral-100 ">
      <section className="bg-version2-400 rounded-md px-8 md:px-14 lg:px-16 pt-12 md:pb-12 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 lg:-gap-3 item-center">
        <section className="col-span-1 lg:col-span-2 flex justify-center flex-col">
          <LandingOfferTitle />
          <LandingOfferDesc />
          <Button type="primary" size="extraLarge" text="Daftar Sekarang" />
        </section>
        <section className="relative">
          <LandingOfferThumb />
          <div className="bg-version2-200 absolute h-[90%] w-[90%] rounded-md -top-2 z-10 -right-2 lg:-right-6"></div>
        </section>
      </section>
    </div>
  );
};

export default LandingOffer;
