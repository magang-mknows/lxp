import { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import { TrainingContractBreadCumbs } from "@/utils/const";
import TrainingDetail from "../moleculs/TrainingDetail";
import TrainingContractHeader from "../moleculs/TrainingContractHeader";
import TrainingContractMain from "../moleculs/TrainingContractMain";

const TrainingContractPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[200vh] md:min-h-[120vh] lg:min-h-[150vh] xl:min-h-[120vh] relative overflow-hidden">
      <Breadcums items={TrainingContractBreadCumbs} />
      <TrainingContractHeader />
      <TrainingContractMain />
      <TrainingDetail />
    </section>
  );
};

export default TrainingContractPage;
