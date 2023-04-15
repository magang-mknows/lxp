"use client";
import { TrainingContractBreadCumbs } from "@/utils/const";
import { FC, ReactElement } from "react";
import Breadcums from "../atoms/breadcums";
import TrainingContractHeader from "../moleculs/training-contract-header";
import TrainingContractMain from "../moleculs/training-contract-main";
import TrainingDetail from "../moleculs/training-detail";

const TrainingContractPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[155vh] md:min-h-[120vh] relative overflow-hidden">
      <Breadcums items={TrainingContractBreadCumbs} />
      <TrainingContractHeader />
      <TrainingContractMain />
      <TrainingDetail />
    </section>
  );
};

export default TrainingContractPage;
