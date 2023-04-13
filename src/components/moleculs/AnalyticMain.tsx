import Image from "next/image";
import { FC, ReactElement } from "react";
import AnalyticGraph from "../atoms/AnalyticGraph";
import AnalyticIcon from "../atoms/AnalyticIcon";
import AnalyticPerformance from "../atoms/AnalyticPerformance";
import AnalyticRecentPerformance from "../atoms/AnalyticRecentPerformance";

const AnalyticMain: FC = (): ReactElement => {
  return (
    <main className="w-full col-span-3 lg:col-span-2 flex flex-col gap-6">
      <section className=" bg-neutral-50 py-6 px-8 w-full">
        <header className="mb-10 text-base font-bold border-b-[0.5px] border-neutral-300 pb-3">
          <h1>Analisa hasil belajar tiap Batch</h1>
        </header>
        <main className="grid grid-cols-3 gap-6">
          <AnalyticGraph />
          <AnalyticIcon />
        </main>
      </section>
      <section className="grid grid-cols-3 gap-7 min-h-[300px]">
        <AnalyticRecentPerformance />
        <section className="col-span-3 lg:col-span-2 bg-neutral-50 px-8 py-3">
          <header className="border-b-[0.5px] border-neutral-200 py-2">
            <h1 className="text-sm font-bold">Analisa Performa Karyawan</h1>
          </header>
          <AnalyticPerformance />
        </section>
      </section>
    </main>
  );
};

export default AnalyticMain;
