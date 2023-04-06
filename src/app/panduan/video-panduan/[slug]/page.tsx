import RegistrationVideoModule from "@/modules/Guide/registration-video/RegistrationVideoModule";
import React, { ReactElement, Suspense } from "react";

const page = (): ReactElement => {
  return (
    <Suspense>
      <RegistrationVideoModule />
    </Suspense>
  );
};

export default page;
