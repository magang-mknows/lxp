import AboutPage from "@/components/organism/AboutPage";
import LayoutProvider from "@/providers/LayoutProvider";
import React from "react";

const AboutModule = () => {
  return (
    <LayoutProvider>
      <AboutPage />
    </LayoutProvider>
  );
};

export default AboutModule;
