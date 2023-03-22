import { FC, ReactElement } from "react";
import Button from "../atoms/Button";
import LandingOfferDesc from "../atoms/LandingOfferDesc";
import LandingOfferTitle from "../atoms/LandingOfferTitle";
import LandingOfferThumb from "../atoms/LandingOfferThumb";

const LandingOffer: FC = (): ReactElement => {
  return (
    <div className="px-16 bg-neutral-100">
      <section className="bg-version2-400 px-20 py-12 grid grid-cols-3 item-center">
        <section className="col-span-2 flex justify-center flex-col">
          <LandingOfferTitle />
          <LandingOfferDesc />
          <Button type="primary" size="extraLarge" text="Daftar Sekarang" />
        </section>
        <section>
          <LandingOfferThumb />
        </section>
      </section>
    </div>
  );
};

export default LandingOffer;
