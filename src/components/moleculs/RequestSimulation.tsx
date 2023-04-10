"use client";

import { dummySceduleSimulation } from "@/store/drill-simulation";
import { FC, ReactElement } from "react";
import { useRecoilValue } from "recoil";
import RequestSimulationCard from "../atoms/RequestSimulationCard";

const RequestSimulation: FC = (): ReactElement => {
  const getdummyData = useRecoilValue(dummySceduleSimulation);

  return (
    <header className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {getdummyData.map((data, index) => {
        return (
          <RequestSimulationCard
            location={data.location}
            key={index}
            ImgSrc={data.ImgSrc}
            category={data.category}
            lecture={data.lecture}
            schedule={data.schedule}
            title={data.title}
          />
        );
      })}
    </header>
  );
};

export default RequestSimulation;
