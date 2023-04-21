import MyTrainingModulePage from "@/components/organism/my-training-module";
import LayoutProvider from "@/providers/LayoutProvider";
import React, { ReactElement } from "react";

const MyTrainingModulModules = (): ReactElement => {
  return (
    <LayoutProvider>
      <MyTrainingModulePage />
    </LayoutProvider>
  );
};

export default MyTrainingModulModules;
