import RegistrationVideoPages from "@/components/organism/RegistrationVideo/RegistrationVideoPages";
import LayoutProvider from "@/providers/LayoutProvider";
import React, { ReactElement } from "react";

const RegistrationVideoModule = (): ReactElement => {
  return (
    <LayoutProvider className="!bg-[#FAFAFA] dark:!bg-gray-900">
      <RegistrationVideoPages />
    </LayoutProvider>
  );
};

export default RegistrationVideoModule;
