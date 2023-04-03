import GuidePages from "@/components/organism/Guide/Guide";
import LayoutProvider from "@/providers/LayoutProvider";
import React, { ReactElement } from "react";

const GuideModule = (): ReactElement => {
  return (
    <LayoutProvider className="!bg-[#fff]">
      <GuidePages />
    </LayoutProvider>
  );
};

export default GuideModule;
