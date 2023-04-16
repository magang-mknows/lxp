"use client";
import HistorySimulationCardLoading from "@/modules/drill-simulation/loading/HistorySimulationCardLoading";
import { dummyRegisteredSimulation } from "@/modules/drill-simulation/store";
import dynamic from "next/dynamic";
import { FC, Fragment, ReactElement } from "react";
import { useRecoilValue } from "recoil";

const HistorySimulationCard = dynamic(() => import("../atoms/HistorySimulationCard"), {
  ssr: false,
  loading: () => <HistorySimulationCardLoading />,
});

const HistorySimulation: FC = (): ReactElement => {
  const registeredSimulation = useRecoilValue(dummyRegisteredSimulation);
  return (
    <Fragment>
      {registeredSimulation.map((item, index) => {
        return (
          <HistorySimulationCard
            key={index}
            ImgSrc={item.ImgSrc}
            category={item.category}
            lecture={item.lecture}
            location={item.location}
            schedule={item.schedule}
            title={item.title}
            status={item.status}
          />
        );
      })}
    </Fragment>
  );
};

export default HistorySimulation;
