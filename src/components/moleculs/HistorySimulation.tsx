"use client";
import { dummyRegisteredSimulation } from "@/store/drill-simulation";
import { FC, Fragment, ReactElement } from "react";
import { useRecoilValue } from "recoil";
import HistorySimulationCard from "../atoms/HistorySimulationCard";

const HistorySimulation: FC = (): ReactElement => {
  const registeredSimulation = useRecoilValue(dummyRegisteredSimulation);
  console.log(registeredSimulation);
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
