import Image from "next/image";
import { FC, ReactElement } from "react";
import Button from "../atoms/Button";
import LandingHeroHeadlineTitle from "../atoms/LandingHeroHeadlineTitle";
import LandingHeroHeadlineDesc from "../atoms/LandingHeroHeadlineDesc";
import LandingHeroHeadlinePoster from "../atoms/LandingHeroHeadlinePoster";

const LandingHero: FC = (): ReactElement => {
  return (
    <div className="flex flex-col items-center pt-16 md:pt-20 lg:pt-24 relative overflow-hidden bg-no-repeat bg-cover bg-LandingHero">
      <LandingHeroHeadlineTitle />
      <LandingHeroHeadlineDesc />
      <Button type="primary" text="Get a demo" size="medium" />
      <LandingHeroHeadlinePoster />
    </div>
  );
};

export default LandingHero;
