import React, { Fragment, ReactElement, Suspense } from "react";
import LayoutProvider from "@/providers/LayoutProvider";
import AssigmentStatus from "@/components/organism/Assigment/AssigmentStatus";
import BannerAssigmentSection from "@/components/organism/Assigment/BannerAssigmentSection";
import AssigmentPageLoading from "./loading";
import BannerLoading from "./BannerLoading";

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
