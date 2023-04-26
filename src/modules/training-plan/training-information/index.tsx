"use client";
import TrainingInformationPage from "@/components/organism/TrainingInformationPage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const TrainingInformationModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <TrainingInformationPage />
    </ContentProvider>
  );
};

export default TrainingInformationModule;
