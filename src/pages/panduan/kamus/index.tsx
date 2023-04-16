import GuideDictinoaryModule from "@/modules/Guide/guide-dictionary/GuideDictinoaryModule";
import { NextPage } from "next";
import React, { ReactElement, Suspense } from "react";

const Page: NextPage = (): ReactElement => {
  return (
    <Suspense>
      <GuideDictinoaryModule />
    </Suspense>
  );
};

export default Page;
