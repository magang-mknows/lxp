import RegistrationVideoModule from "@/modules/Guide/registration-video/RegistrationVideoModule";
import { NextPage } from "next";
import React, { ReactElement, Suspense } from "react";

const page: NextPage = (): ReactElement => {
  return (
    <Suspense>
      <RegistrationVideoModule />
    </Suspense>
  );
};

export default page;
