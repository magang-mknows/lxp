import React, { ReactElement, Suspense } from "react";
import AssigmentStatus from "./AssigmentStatus";
import BannerAssigmentSection from "./BannerAssigmentSection";

const AssigmentPage = (): ReactElement => {
  return (
    <Suspense>
      <BannerAssigmentSection />
      <AssigmentStatus />
    </Suspense>
  );
};

export default AssigmentPage;
