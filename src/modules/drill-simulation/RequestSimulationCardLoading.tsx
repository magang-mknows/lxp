import { FC, ReactElement } from "react";

const RequestSimulationCardLoading: FC = (): ReactElement => {
  return (
    <section className="pt-10 grid px-8 md:px-14 lg:px-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[...Array(6)].map((item, index) => {
        return (
          <div key={index} className="w-full rounded-md animate-pulse bg-neutral-200 h-80"></div>
        );
      })}
    </section>
  );
};

export default RequestSimulationCardLoading;
