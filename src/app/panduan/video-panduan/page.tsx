import GuideVideoModule from "@/modules/Guide/guide-video/GuideVideoModule";
import React, { ReactElement, Suspense } from "react";

const Page = (): ReactElement => {
  return (
    <Suspense>
      <GuideVideoModule />
    </Suspense>
  );
};

export default Page;
