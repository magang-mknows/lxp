import RegistrationGuideBookModule from "@/components/organism/RegistrationGuide";
import { ReactElement, Suspense } from "react";
const Page = (): ReactElement => {
  return (
    <Suspense>
      <RegistrationGuideBookModule />
    </Suspense>
  );
};

export default Page;
