import GuideVideoPages from "@/components/organism/GuideVideo/GuideVideoPage";
import LayoutProvider from "@/providers/LayoutProvider";
import React, { ReactElement } from "react";

const GuideVideoModule = (): ReactElement => {
  return (
    <LayoutProvider className="!bg-[#fff]">
      <GuideVideoPages />
    </LayoutProvider>
  );
};

export default GuideVideoModule;
