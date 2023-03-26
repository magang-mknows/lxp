import FeaturePage from "@/components/organism/FeaturePage";
import ClienProvider from "@/providers/ClientProvider";
import React from "react";

const FeaturesModule = () => {
  return (
    <ClienProvider>
      <FeaturePage />
    </ClienProvider>
  );
};

export default FeaturesModule;
