import AboutPage from "@/components/organism/about-page";
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
