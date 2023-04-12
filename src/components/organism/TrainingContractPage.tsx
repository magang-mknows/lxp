"use client";
import { TrainingContractBreadCumbs } from "@/utils/const";
import { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import TrainingContractHeader from "../moleculs/TrainingContractHeader";
import TrainingContractMain from "../moleculs/TrainingContractMain";

const TrainingContractPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[120vh] ">
      <Breadcums items={TrainingContractBreadCumbs} />
      <TrainingContractHeader />
      <TrainingContractMain />
    </section>
  );
};

export default TrainingContractPage;
