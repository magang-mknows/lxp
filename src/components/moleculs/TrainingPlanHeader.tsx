import { FC, ReactElement } from "react";
import TrainingPlanSearch from "../atoms/TrainingPlanSearch";

const TrainingPlanHeader: FC = (): ReactElement => {
  return (
    <header className="w-full mb-10 px-8 md:px-14 lg:px-16 flex items-center justify-center flex-col">
      <p className="text-lg text-neutral-500">Pelatihan</p>
      <h1 className="text-2xl text-version3-300 font-bold">Pilih Departement</h1>
      <TrainingPlanSearch />
    </header>
  );
};

export default TrainingPlanHeader;