import { FC, Fragment, ReactElement } from "react";

const LandingArticleTitle: FC = (): ReactElement => {
  return (
    <Fragment>
      <h1 className="text-neautral-900 font-black mb-10 text-3xl">Artikel Terbaru</h1>
    </Fragment>
  );
};

export default LandingArticleTitle;
