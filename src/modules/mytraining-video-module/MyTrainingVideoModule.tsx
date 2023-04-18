import VideoTrainingPages from "@/components/organism/my-training-video-module";
import LayoutProvider from "@/providers/LayoutProvider";
import React, { ReactElement } from "react";

const RegistrationVideoModule = (): ReactElement => {
  return (
    <LayoutProvider className="!bg-[#FAFAFA] dark:!bg-gray-900">
      <VideoTrainingPages />
    </LayoutProvider>
  );
};

export default RegistrationVideoModule;
