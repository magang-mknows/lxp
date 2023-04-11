import { FC, ReactElement } from "react";

const DrillSimulationHeaderLoading: FC = (): ReactElement => {
  return (
    <section className="pt-20 px-8 md:px-14 lg:px-16 mb-10">
      <div className="flex w-full justify-center flex-col items-center">
        <div className=" rounded-mdtext-3xl h-9 bg-neutral-200 animate-pulse rounded-md w-80 text-neutral-900 font-bold mb-2"></div>
        <p className="text-neutral-700 h-4 w-[600px] bg-neutral-200 animate-pulse rounded-md mb-1"></p>
      </div>
      <div className="bg-neutral-200 animate-pulse h-[56px] mt-10 w-full rounded-md shadow-sm"></div>
    </section>
  );
};

export default DrillSimulationHeaderLoading;
