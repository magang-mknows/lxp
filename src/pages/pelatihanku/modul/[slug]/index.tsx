import RegistrationVideoModule from "@/modules/pelatihanku/registration-video/MyTrainingVideoModule";
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
