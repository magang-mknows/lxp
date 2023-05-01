import { FC, ReactElement } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import Button from "../atoms/Button";
import { showDetailTraining } from "@/modules/training-plan/store";
import TrainingDetailCard from "../atoms/TrainingDetailCard";
import { TdetailInformation } from "@/modules/training-plan/training-information/types";

const TrainingDetail: FC<TdetailInformation> = ({
  name,
  indicator,
  study_experience,
  basic_competencies,
  teaching_materials,
  tools_needed,
  session_total_number,
}): ReactElement => {
  const setShowDetail = useSetRecoilState(showDetailTraining);

  return (
    <section className="px-8 text-left md:px-14 py-8 bg-neutral-50 rounded-sm ">
      <header className="mb-4 ">
        <h1 className="text-base font-bold text-neutral-800">Kompetensi yang dikembangkan</h1>
        <p className="text-sm text-neutral-700">Mata Kuliah {name}</p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <TrainingDetailCard
          title="Kompetensi Dasar"
          desc={basic_competencies}
          addtionalClass="bg-neutral-200 text-neutral-800 "
        />
        <TrainingDetailCard
          title="Indikator"
          desc={indicator}
          addtionalClass="bg-neutral-200 text-neutral-800 "
        />
        <TrainingDetailCard
          title="Pengalaman Pembelajaran"
          desc={study_experience}
          addtionalClass="bg-neutral-200 text-neutral-800 "
        />
        <TrainingDetailCard
          title="Materi Ajar"
          desc={teaching_materials}
          addtionalClass="bg-version2-400 text-neutral-50"
        />
        <TrainingDetailCard
          title="Waktu"
          desc={session_total_number as unknown as string}
          addtionalClass="bg-version2-400 text-neutral-50"
        />
        <TrainingDetailCard
          title="Alat, Bahan, Sumber Belajar"
          desc={tools_needed}
          addtionalClass="bg-version2-400 text-neutral-50"
        />
      </main>
      <section className="w-full flex justify-end py-6">
        <Button
          type="secondary"
          text="Kembali"
          size="medium"
          onClick={() => {
            setShowDetail(false);
          }}
          className="!text-version2-400 !border-version2-400"
        />
      </section>
    </section>
  );
};

export default TrainingDetail;
