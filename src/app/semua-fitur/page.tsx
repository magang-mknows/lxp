import FeaturePage from "@/components/organism/FeaturePage";
import FeaturesModule from "@/modules/features/FeaturesModule";
import { NextPage } from "next";
import { ReactElement } from "react";

const Features: NextPage = (): ReactElement => {
  return <FeaturesModule />;
};

export default Features;
