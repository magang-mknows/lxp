import { FC, Fragment, ReactElement } from "react";

const LandingArticleTitle: FC = (): ReactElement => {
  return (
    <Fragment>
      <h1 className="text-neutral-900 font-bold mb-4 md:mb-5 lg:mb-8 xl:mb-8 text-2xl md:text-3xl">
        Artikel Terbaru
      </h1>
    </Fragment>
  );
};

export default LandingArticleTitle;
