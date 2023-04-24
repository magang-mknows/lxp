import MyTrainingVideoPages from "@/components/organism/my-training-video-module";
import LayoutProvider from "@/providers/LayoutProvider";
import React, { ReactElement } from "react";

const MyTrainingVideoModule = (): ReactElement => {
  return (
    <LayoutProvider className="!bg-[#FAFAFA] dark:!bg-gray-900">
      <MyTrainingVideoPages />
    </LayoutProvider>
  );
};

export default MyTrainingVideoModule;
