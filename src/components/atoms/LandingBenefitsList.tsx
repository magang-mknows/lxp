import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const LandingBenefitsList: FC<TCardContentProps> = ({ desc, title }): ReactElement => {
  return (
    <div className="text-neautral-50  h-fit">
      <h1 className="mb-2 text-lg font-bold">{title}</h1>
      <p className="text-xs text-neautral-50/90">{desc}</p>
    </div>
  );
};

export default LandingBenefitsList;
