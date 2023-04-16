import React, { Fragment, ReactElement } from "react";
import BannerLoading from "./BannerLoading";
import ContentLoading from "./ContentLoading";

const AssigmentPageLoading = (): ReactElement => {
  return (
    <div className="mt-[125px]">
      <BannerLoading />
      <ContentLoading />
    </div>
  );
};

export default AssigmentPageLoading;
