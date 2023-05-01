"use client";
import { TrainingContractBreadCumbs } from "@/utils/const";
import { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import TrainingInformationHeader from "../moleculs/TrainingInformationHeader";
import TrainingInformationMain from "../moleculs/TrainingInformationMain";

const TrainingInformationPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[200vh] md:min-h-[120vh] lg:min-h-[150vh] xl:min-h-[120vh] relative overflow-hidden">
      <Breadcums items={TrainingContractBreadCumbs} />
      <TrainingInformationHeader />
      <TrainingInformationMain />
    </section>
  );
};

export default TrainingInformationPage;
