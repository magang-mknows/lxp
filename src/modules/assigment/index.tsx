import React, { Fragment, ReactElement, Suspense } from "react";
import LayoutProvider from "@/providers/LayoutProvider";
import AssigmentPageLoading from "./loading";
import BannerLoading from "./BannerLoading";
import BannerAssigmentSection from "./BannerAssigmentSection";
import AssigmentStatus from "./AssigmentStatus";

const AssigmentPage = (): ReactElement => {
  return (
    <LayoutProvider>
      <Suspense fallback={<BannerLoading />}>
        <BannerAssigmentSection />
      </Suspense>
      <Suspense fallback={<AssigmentPageLoading />}>
        <AssigmentStatus />
      </Suspense>
    </LayoutProvider>
  );
};

export default AssigmentPage;
