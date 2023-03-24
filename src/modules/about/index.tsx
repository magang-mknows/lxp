import AboutPage from "@/components/organism/AboutPage";
import ClienProvider from "@/providers/ClientProvider";
import React from "react";

const AboutModule = () => {
  return (
    <ClienProvider>
      <AboutPage />
    </ClienProvider>
  );
};

export default AboutModule;
