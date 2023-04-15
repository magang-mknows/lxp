"use client";

import { FC, ReactElement, Suspense } from "react";
import { RequestSimulationBreadCumbs } from "@/utils/const";
import Breadcums from "../atoms/breadcums";
import RequestSceduleMain from "../moleculs/request-scedule-main";

const RequestScedulePage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20 ">
      <Breadcums items={RequestSimulationBreadCumbs} />
      <section className="px-8 md:px-14 lg:px-16 py-0 md:py-2 lg:py-4 ">
        <header className="w-full font-bold text-xl md:text-2xl lg:text-3xl mb-6 text-neutral-900">
          Drill, Simulasi & Assessmen
        </header>
        <Suspense>
          <RequestSceduleMain />
        </Suspense>
      </section>
    </section>
  );
};

export default RequestScedulePage;
