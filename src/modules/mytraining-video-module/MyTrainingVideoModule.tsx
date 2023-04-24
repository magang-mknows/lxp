import LayoutProvider from "@/providers/LayoutProvider";
import SuspenseError from "@/providers/SuspenseError";
import React, { ReactElement, lazy } from "react";
import Loading from "./loading";

const MyTrainingVideoModule = (): ReactElement => {
  const MyTrainingVideoPages = lazy(() => import("@/components/organism/my-training-video-module"));
  return (
    <SuspenseError loadingFallback={<Loading />}>
      <LayoutProvider className="!bg-[#FAFAFA] dark:!bg-gray-900">
        <MyTrainingVideoPages />
      </LayoutProvider>
    </SuspenseError>
  );
};

export default MyTrainingVideoModule;
