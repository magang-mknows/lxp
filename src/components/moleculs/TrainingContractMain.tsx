"use client";
import React, { FC, ReactElement } from "react";
import TrainingContractAlert from "../atoms/TrainingContractAlert";
import TrainingContractTable from "./TrainingContractTable";

const TrainingContractMain: FC = (): ReactElement => {
  return (
    <main className="px-8 md:px-14 lg:px-16  ">
      <TrainingContractAlert />
      <TrainingContractTable />
    </main>
  );
};

export default TrainingContractMain;
