"use client";
import { TrainingContractBreadCumbs } from "@/utils/const";
import { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import TrainingContractHeader from "../moleculs/TrainingContractHeader";
import TrainingContractMain from "../moleculs/TrainingContractMain";
import TrainingDetail from "../moleculs/TrainingDetail";

const TrainingContractPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[200vh] md:min-h-[120vh] relative overflow-hidden">
      <Breadcums items={TrainingContractBreadCumbs} />
      <TrainingContractHeader />
      <TrainingContractMain />
      <TrainingDetail />
    </section>
  );
};

export default TrainingContractPage;
