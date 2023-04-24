import MyTrainingVideoModule from "@/modules/mytraining-video-module/MyTrainingVideoModule";
import { NextPage } from "next";
import React, { ReactElement, Suspense } from "react";

const page: NextPage = (): ReactElement => {
  return (
    <Suspense>
      <MyTrainingVideoModule />
    </Suspense>
  );
};

export default page;
