import React, { Fragment, ReactElement, Suspense } from "react";
import AssigmentStatus from "./AssigmentStatus";
import BannerAssigmentSection from "./BannerAssigmentSection";
import BannerLoading from "@/modules/Assigment/BannerLoading";
import AssigmentPageLoading from "@/modules/Assigment/AssigmentPageLoading";

const AssigmentPage = (): ReactElement => {
  return (
    <Fragment>
      <Suspense fallback={<BannerLoading />}>
        <BannerAssigmentSection />
      </Suspense>
      <Suspense fallback={<AssigmentPageLoading />}>
        <AssigmentStatus />
      </Suspense>
    </Fragment>
  );
};

export default AssigmentPage;
