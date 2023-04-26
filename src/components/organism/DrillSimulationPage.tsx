"use client";
import { drillSimulationType } from "@/utils/const";
import { Tab } from "@headlessui/react";
import { FC, Fragment, ReactElement, Suspense } from "react";
import DrillSimulationHeader from "../atoms/DrillSimulationHeader";
import HistorySimulation from "../moleculs/HistorySimulation";
import RequestSimulation from "../moleculs/RequestSimulation";

const DrillSimulationPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20 ">
      <DrillSimulationHeader />
      <Tab.Group>
        <Tab.List
          as="div"
          className="mx-8 md:mx-14 lg:mx-16  border-b-[1px] text-sm border-neutral-400"
        >
          {drillSimulationType.map((type, index) => {
            return (
              <Tab key={index} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${
                      selected
                        ? "font-bold text-version3-500 border-b-2 border-version3-500 pb-3 outline-none  focus:outline-none active:outline-none "
                        : " text-neutral-400"
                    }  px-2 mr-4 `}
                  >
                    <h1>{type}</h1>
                  </button>
                )}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="mx-8 md:mx-14 lg:mx-16 py-6" as="div">
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
