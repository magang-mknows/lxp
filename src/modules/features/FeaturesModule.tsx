import FeaturePage from "@/components/organism/FeaturePage";
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
