"use client";
import React, { FC, ReactElement } from "react";
import TrainingInformationAlert from "../atoms/TrainingInformationAlert";
import TrainingInformationTable from "./TrainingInformationTable";

const TrainingInformationMain: FC = (): ReactElement => {
  return (
    <main className="px-8 md:px-14 lg:px-16  ">
      <TrainingInformationAlert />
      <TrainingInformationTable />
    </main>
  );
};

export default TrainingInformationMain;
