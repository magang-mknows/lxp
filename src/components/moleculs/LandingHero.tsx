import Image from "next/image";
import { FC, ReactElement } from "react";
import Button from "../atoms/Button";
import LandingHeroHeadlineTitle from "../atoms/LandingHeroHeadlineTitle";
import LandingHeroHeadlineDesc from "../atoms/LandingHeroHeadlineDesc";
import LandingHeroHeadlinePoster from "../atoms/LandingHeroHeadlinePoster";

const LandingHero: FC = (): ReactElement => {
  return (
    <div className="flex flex-col  items-center pt-16 md:pt-20 lg:pt-24 relative overflow-hidden">
      <div className="absolute left-0 right-0 bottom-0 top-0 w-[100wh]">
        <Image
          alt="bg-hero"
          className="h-full -z-50 w-full object-cover"
          src={"/assets/landing/landingHeroImage.webp"}
          width={800}
          height={800}
          loading="eager"
        />
      </div>
      <LandingHeroHeadlineTitle />
      <LandingHeroHeadlineDesc />
      <Button type="primary" text="Get a demo" size="medium" />
      <LandingHeroHeadlinePoster />
    </div>
  );
};

export default LandingHero;
