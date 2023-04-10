"use client";
import { drillSimulationType } from "@/utils/const";
import { Tab } from "@headlessui/react";
import dynamic from "next/dynamic";
import { FC, ReactElement, Suspense } from "react";
import DrillSimulationHeader from "../atoms/DrillSimulationHeader";

const RequestSimulation = dynamic(() => import("../moleculs/RequestSimulation"), {
  ssr: false,
});
const HistorySimulation = dynamic(() => import("../moleculs/HistorySimulation"), {
  ssr: false,
});

const DrillSimulationPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20 ">
      <DrillSimulationHeader />
      <Tab.Group>
        <Tab.List className="mx-8 md:mx-14 lg:mx-16  border-b-[1px] text-sm border-neutral-400">
          {drillSimulationType.map((type, index) => {
            return (
              <Tab key={index}>
                {({ selected }) => (
                  <section
                    className={`${
                      selected
                        ? "font-bold text-version3-500 border-b-2 border-version3-500 pb-3"
                        : " text-neutral-400"
                    }  px-2 mr-4 `}
                  >
                    <h1>{type}</h1>
                  </section>
                )}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="mx-8 md:mx-14 lg:mx-16 py-6">
          <Tab.Panel>
            <Suspense>
              <RequestSimulation />
            </Suspense>
          </Tab.Panel>
          <Tab.Panel>
            <Suspense>
              <HistorySimulation />
            </Suspense>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default DrillSimulationPage;
