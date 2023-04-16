import React, { Fragment, ReactElement } from "react";
import BannerLoading from "./BannerLoading";
import ContentLoading from "./ContentLoading";

const AssigmentLoading = (): ReactElement => {
  return (
    <div className="mt-[125px]">
      <BannerLoading />
      <ContentLoading />
    </div>
  );
};

export default AssigmentLoading;
