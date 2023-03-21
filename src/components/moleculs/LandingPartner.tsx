import { FC, ReactElement } from "react";
import LandingPartnerLogo from "../atoms/LandingPartnerLogo";
import LandingPartnerTitle from "../atoms/LandingPartnerTitle";

const LandingPartner: FC = (): ReactElement => {
  return (
    <div className="bg-version2-400 px-36 flex items-center justify-between py-20">
      <LandingPartnerTitle />
      <div className=" grid grid-cols-4 gap-0.5">
        {[...Array(8)].map((data, index) => {
          return <LandingPartnerLogo key={index} id={index + 1} />;
        })}
      </div>
    </div>
  );
};

export default LandingPartner;
