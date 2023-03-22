import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const LandingCatalogContent: FC<TCardContentProps> = ({ desc, title }): ReactElement => {
  return (
    <div>
      <h1 className="mb-2  py-2 font-bold">{title}</h1>
      <section className="flex gap-2 items-center">
        <span className="w-2 h-2 rounded-lg bg-version3-500 block"></span>
        <p className="text-xs font-medium">{desc}</p>
      </section>
    </div>
  );
};

export default LandingCatalogContent;
