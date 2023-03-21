import Navbar from "@/components/moleculs/Navbar";
import LandingPage from "@/components/organism/LandingPage";
import ClienProvider from "@/providers/ClientProvider";
import { FC, ReactElement } from "react";

const LandingModule: FC = (): ReactElement => {
  return (
    <ClienProvider>
      <LandingPage />
    </ClienProvider>
  );
};

export default LandingModule;
