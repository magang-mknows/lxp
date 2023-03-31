import React, { Fragment, ReactElement, Suspense } from "react";
import AssigmentStatus from "./AssigmentStatus";
import BannerAssigmentSection from "./BannerAssigmentSection";
import BannerLoading from "@/modules/Assigment/BannerLoading";
import AssigmentLoading from "@/modules/Assigment/AssigmentLoading";

const AssigmentPage = (): ReactElement => {
  return (
    <Fragment>
      <Suspense fallback={<BannerLoading />}>
        <BannerAssigmentSection />
      </Suspense>
      <Suspense fallback={<AssigmentLoading />}>
        <AssigmentStatus />
      </Suspense>
    </Fragment>
  );
};

export default AssigmentPage;
