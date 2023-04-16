import AssigmentPage from "@/components/organism/Assigment/Assigment";
import LayoutProvider from "@/providers/LayoutProvider";
import React, { ReactElement } from "react";

const AssigmentModules = (): ReactElement => {
  return (
    <LayoutProvider>
      <AssigmentPage />
    </LayoutProvider>
  );
};

export default AssigmentModules;
