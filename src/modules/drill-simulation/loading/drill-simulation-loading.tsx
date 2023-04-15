import { FC, ReactElement } from "react";
import DrillSimulationHeaderLoading from "./drill-simulation-header-loading";
import RequestSimulationCardLoading from "./request-simulation-card-loading";

const DrillSimulationLoading: FC = (): ReactElement => {
  return (
    <section className="pt-[74px] bg-neutral-100/70">
      <DrillSimulationHeaderLoading />
      <section className="pt-10 grid px-8 md:px-14 lg:px-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[...Array(6)].map((item, index) => {
          return <RequestSimulationCardLoading key={index} />;
        })}
      </section>
    </section>
  );
};

export default DrillSimulationLoading;
