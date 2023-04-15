import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const LandingCatalogContentDesc: FC<TCardContentProps> = ({ desc }): ReactElement => {
  return (
    <section className="flex gap-2 items-center">
      <span className="w-2 h-2 rounded-lg bg-version3-500 block"></span>
      <p className="text-xs text-neutral-800 font-medium">{desc}</p>
    </section>
  );
};

export default LandingCatalogContentDesc;
