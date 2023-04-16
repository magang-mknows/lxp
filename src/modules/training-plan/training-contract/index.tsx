"use client";
import TrainingContractPage from "@/components/organism/TrainingContractPage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const TrainingContractModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <TrainingContractPage />
    </ContentProvider>
  );
};

export default TrainingContractModule;
