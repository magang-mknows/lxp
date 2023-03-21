import { FC, ReactElement } from "react";
import Button from "../atoms/Button";
import Headline from "../atoms/HeroHeadline";
import HeadlineDesc from "../atoms/HeroHeadlineDesc";
import HeadlinePoster from "../atoms/HeroHeadlinePoster";

const LandingHero: FC = (): ReactElement => {
  return (
    <div
      className="flex flex-col items-center py-24 relative overflow-hidden  max-h-[126vh] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(/assets/landing/heroImage.svg)`,
      }}
    >
      <Headline />
      <HeadlineDesc />
      <Button type="primary" text="Get a demo" size="w-28" />
      <HeadlinePoster />
    </div>
  );
};

export default LandingHero;
