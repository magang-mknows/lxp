"use client";

import { TrainingPlanBreadCumbs } from "@/utils/const";
import { FC, ReactElement } from "react";
import Breadcums from "../atoms/breadcums";
import TrainingPlanHeader from "../moleculs/training-plan-header";
import TrainingPlanMain from "../moleculs/training-plan-main";

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
