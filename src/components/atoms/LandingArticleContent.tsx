import { FC, Fragment, ReactElement } from "react";
import { TCardContentProps } from "./types";

const LandingArticleContent: FC<TCardContentProps> = ({ desc, title }): ReactElement => {
  return (
    <Fragment>
      <h1 className="font-bold text-neautral-900 text-sm md:text-base mb-1">{title}</h1>
      <p className="text-neautral-700 text-xs ">{desc}</p>
    </Fragment>
  );
};

export default LandingArticleContent;
