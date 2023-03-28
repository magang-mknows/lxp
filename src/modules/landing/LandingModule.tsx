import LandingPage from "@/components/organism/LandingPage";
import LayoutProvider from "@/providers/LayoutProvider";
import { FC, ReactElement } from "react";

const LandingModule: FC = (): ReactElement => {
  return (
    <LayoutProvider>
      <LandingPage />
    </LayoutProvider>
  );
};

export default LandingModule;
