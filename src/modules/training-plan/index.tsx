import TrainingPlanPage from "@/components/organism/TrainingPlanPage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const TrainingPlanModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <TrainingPlanPage />
    </ContentProvider>
  );
};

export default TrainingPlanModule;
