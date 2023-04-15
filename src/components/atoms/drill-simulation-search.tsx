"use client";
import { FC, ReactElement } from "react";
import { queryScheduleSimulation } from "@/modules/drill-simulation/store";
import { AiOutlineSearch } from "react-icons/ai";
import { useRecoilState } from "recoil";

const DrillSimulationSearch: FC = (): ReactElement => {
  const [query, setQuery] = useRecoilState(queryScheduleSimulation);

  return (
    <div className="bg-neutral-100 h-[56px] mt-10 w-full rounded-md shadow-sm">
      <div className="flex items-center px-4 md:px-6 gap-4 py-4">
        <AiOutlineSearch className="text-neutral-400 text-xl" />
        <input
          type={"text"}
          value={query}
          className="bg-neutral-100 text-sm text-neutral-700 w-full focus:outline-none"
          placeholder="Cari Simulasi"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
    </div>
  );
};

export default DrillSimulationSearch;
