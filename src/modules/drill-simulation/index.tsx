import DrillSimulationPage from "@/components/organism/DrillSimulationPage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const DrillSimulationModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <DrillSimulationPage />
    </ContentProvider>
  );
};

export default DrillSimulationModule;
