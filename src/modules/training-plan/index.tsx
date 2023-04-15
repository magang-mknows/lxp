import TrainingPlanPage from "@/components/organism/training-plan-page";
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
