import FeaturePage from "@/components/organism/feature-page";
import LayoutProvider from "@/providers/LayoutProvider";
import React from "react";

const FeaturesModule = () => {
  return (
    <LayoutProvider>
      <FeaturePage />
    </LayoutProvider>
  );
};

export default FeaturesModule;
