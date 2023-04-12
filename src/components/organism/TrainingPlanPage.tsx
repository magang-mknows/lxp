"use client";

import { TrainingPlanBreadCumbs } from "@/utils/const";
import { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import Card from "../atoms/Card";
import TrainingPlanHeader from "../moleculs/TrainingPlanHeader";
import TrainingPlanMain from "../moleculs/TrainingPlanMain";

const TrainingPlanPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20 ">
      <Breadcums items={TrainingPlanBreadCumbs} />
      <TrainingPlanHeader />
      <TrainingPlanMain />
    </section>
  );
};

export default TrainingPlanPage;
