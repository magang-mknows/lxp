import { FC, ReactElement } from "react";

const TrainingInformationInfo: FC = (): ReactElement => {
  return (
    <main>
      <h1 className="flex gap-4 mb-2 text-sm md:text-base">
        <span className="min-w-[100px] lg:min-w-[200px]">Tema Pelatihan</span> <span>:</span>
        <span> Pelatihan Keterampilan Interpersonal</span>
      </h1>
      <h1 className="flex gap-4 mb-2 text-sm md:text-base">
        <span className="min-w-[100px] lg:min-w-[200px]">Batch</span> <span>:</span>
        <span> 1 (Satu)</span>
      </h1>
      <h1 className="flex gap-4 mb-2 text-sm md:text-base">
        <span className="min-w-[100px] lg:min-w-[200px]">Total Poin</span> <span>:</span>
        <span> 144 Poin</span>
      </h1>
    </main>
  );
};

export default TrainingInformationInfo;
