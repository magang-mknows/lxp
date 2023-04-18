import { FC, Fragment, ReactElement } from "react";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";

const MyTrainingPage: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className=" w-screen px-8 md:px-14 lg:px-16 py-5">
        <HeroSection />
        <ContentSection />
      </div>
    </Fragment>
  );
};

export default MyTrainingPage;
