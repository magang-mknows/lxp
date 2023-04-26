import { FC, ReactElement } from "react";
import TrainingContractTable from "./TrainingContractTable";

const TrainingContractTab: FC = (): ReactElement => {
  return (
    <section>
      <TrainingContractTable />
    </section>
  );
};

export default TrainingContractTab;
