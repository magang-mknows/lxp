import DrillSimulationPage from "@/components/organism/drill-simulation-page";
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
