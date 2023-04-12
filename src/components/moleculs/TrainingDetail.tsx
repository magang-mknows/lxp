import { showDetailTraining } from "@/store/training-plan";
import { FC, ReactElement } from "react";
import { useRecoilState } from "recoil";
import Button from "../atoms/Button";

const TrainingDetail: FC = (): ReactElement => {
  const [isShowDetail, setShowDetail] = useRecoilState(showDetailTraining);

  return (
    <div
      className={`${
        isShowDetail ? " top-0 bottom-0 " : "-bottom-[200%]"
      } transition-all bg-neutral-700/50 ease-in-out  flex justify-center items-end duration-300  z-50 lg:px-48  flex-wrap absolute `}
    >
      <section className="px-8 md:px-14 py-8 bg-neutral-50 rounded-sm ">
        <header className="mb-4">
          <h1 className="text-base font-bold text-neutral-800">Kompetensi yang dikembangkan</h1>
          <p className="text-sm etxt-text-neutral-700">Mata Kuliah Satu</p>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((item, index) => {
            return (
              <section
                key={index}
                className={`${
                  index + 1 > 3
                    ? "bg-neutral-200 text-neutral-800 "
                    : "bg-version2-400 text-neutral-50 "
                } px-10 py-4 rounded-md shadow-sm overflow-hidden`}
              >
                <h1 className="text-base font-bold mb-1">Kompetensi Dasar</h1>
                <p className="text-sm">
                  Kompetensi dasar adalah kemampuan atau keterampilan dasar yang harus dimiliki oleh
                  seseorang dalam suatu bidang atau mata pelajaran tertentu.{" "}
                </p>
              </section>
            );
          })}
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
    </div>
  );
};

export default TrainingDetail;
