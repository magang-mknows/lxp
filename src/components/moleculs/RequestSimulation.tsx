"use client";

import RequestSimulationCardLoading from "@/modules/drill-simulation/loading/RequestSimulationCardLoading";
import { dummySceduleSimulation } from "@/modules/drill-simulation/store";
import dynamic from "next/dynamic";
import { FC, ReactElement, Suspense } from "react";
import { useRecoilValue } from "recoil";

const RequestSimulationCard = dynamic(() => import("../atoms/RequestSimulationCard"), {
  ssr: false,
  loading: () => <RequestSimulationCardLoading />,
});

const RequestSimulation: FC = (): ReactElement => {
  const getdummyData = useRecoilValue(dummySceduleSimulation);

  return (
    <header className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {getdummyData.map((data, index) => {
        return (
          <Suspense key={index} fallback={<RequestSimulationCardLoading />}>
            <RequestSimulationCard
              location={data.location}
              ImgSrc={data.ImgSrc}
              category={data.category}
              lecture={data.lecture}
              schedule={data.schedule}
              title={data.title}
            />
          </Suspense>
        );
      })}
    </header>
  );
};

export default RequestSimulation;
