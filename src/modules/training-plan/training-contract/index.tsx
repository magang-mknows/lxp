"use client";
import TrainingContractPage from "@/components/organism/training-contract-page";
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
