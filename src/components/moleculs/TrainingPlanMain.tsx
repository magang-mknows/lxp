"use client";
import { FC, ReactElement, lazy } from "react";
import TrainingPlanCardContent from "../atoms/TrainingPlanCardContent";
import SuspenseError from "@/providers/SuspenseError";
import CardLoading from "@/modules/training-plan/loading/CardLoading";
import { useGetAllDepartments } from "@/modules/training-plan/hook";
import { AiOutlineSearch } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { searchKeyword } from "@/modules/training-plan/store";

const Card = lazy(() => import("../atoms/Card"));

const TrainingPlanMain: FC = (): ReactElement => {
  const [getKeyword, setKeyword] = useRecoilState(searchKeyword);
  const { data } = useGetAllDepartments();
  const departments = data?.data;

  return (
    <main className="px-8 md:px-14 lg:px-16 ">
      <div className="w-full grid place-items-center mb-10">
        <div className="bg-neutral-100 h-[56px] mt-6 xl:w-[60%] lg:w-[70%] w-full md:w-[90%] rounded-md shadow-sm">
          <div className="flex items-center px-4 md:px-6 gap-4 py-4">
            <AiOutlineSearch className="text-neutral-400 text-xl" />
            <input
              value={getKeyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              type={"text"}
              className="bg-neutral-100 text-sm text-neutral-700 w-full focus:outline-none"
              placeholder="Cari Mata Kuliah"
            />
          </div>
        </div>
      </div>
      <h1 className="text-xl font-bold text-neutral-900 mb-8">Pilihan Pelatihan</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <SuspenseError loadingFallback={<CardLoading />}>
          {departments?.map((department, index) => {
            return (
              <Card
                key={index}
                href={`/rencana-pelatihan/informasi-pelatihan/${department?.id}`}
                hasImage
                src={department?.thumbnail}
                imgheight={200}
                imgwidth={300}
                imgStyle="w-full h-64 rounded-md overflow-hidden"
                className="bg-neutral-50   w-full rounded-md overflow-hidden hover:shadow-lg transition-all ease-in-out duration-150 shadow-sm"
              >
                <TrainingPlanCardContent
                  title={department?.name}
                  subTitle={`${department?.point as unknown as string} Poin`}
                  desc={department?.category}
                />
              </Card>
            );
          })}
        </SuspenseError>
      </section>
    </main>
  );
};

export default TrainingPlanMain;
