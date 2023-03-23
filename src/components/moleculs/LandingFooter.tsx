import { FC, ReactElement } from "react";
import CompanyLogo from "../atoms/CompanyLogo";
import LandingFooterAddress from "../atoms/LandingFooterAddress";
import LandingFooterContact from "../atoms/LandingFooterContact";
import LandingFooterDesc from "../atoms/LandingFooterDesc";
import LandingFooterIcons from "../atoms/LandingFooterIcons";
import LandingFooterLinks from "../atoms/LandingFooterLinks";

const LandingFooter: FC = (): ReactElement => {
  return (
    <div className="bg-neutral-100 px-8 md:px-14 lg:px-16 py-20 gap-x-10 gap-y-10 lg:gap-x-14 xl:gap-y-20 grid grid-cols-3">
      <section className="pr-0  mb-4 col-span-3  lg:col-span-1">
        <CompanyLogo />
        <LandingFooterDesc />
        <LandingFooterIcons />
      </section>
      <section className="flex gap-x-20 gap-y-10 flex-wrap xl:flex-nowrap col-span-3 lg:col-span-2">
        <section className="flex gap-20">
          <LandingFooterLinks />
          <LandingFooterContact />
        </section>
        <LandingFooterAddress />
      </section>
    </div>
  );
};

export default LandingFooter;
