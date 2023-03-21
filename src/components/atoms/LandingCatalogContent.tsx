import { FC, ReactElement } from "react";
import Button from "./Button";
import { TCardContentProps } from "./types";

const LandingCatalogContent: FC<TCardContentProps> = ({ desc, title }): ReactElement => {
  return (
    <div>
      <h1 className="mb-2 px-5 py-2 font-bold">{title}</h1>
      <div className="flex justify-between items-center px-5 mb-3">
        <section className="flex gap-2 items-center">
          <span className="w-2 h-2 rounded-lg bg-version3-500 block"></span>
          <p className="text-xs font-medium">{desc}</p>
        </section>
        <Button text="Join now" size="w-20" type="primary" />
      </div>
    </div>
  );
};

export default LandingCatalogContent;
