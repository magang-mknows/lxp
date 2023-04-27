"use client";
import { FC, ReactElement, lazy } from "react";
import TrainingPlanCardContent from "../atoms/TrainingPlanCardContent";
import SuspenseError from "@/providers/SuspenseError";
import CardLoading from "@/modules/training-plan/loading/CardLoading";
import { useGetAllDepartment } from "@/pages/rencana-pelatihan/hook";

const Card = lazy(() => import("../atoms/Card"));

const TrainingPlanMain: FC = (): ReactElement => {
  const { data } = useGetAllDepartment();
  const departmentList = data?.data;

  return (
    <main className="px-8 md:px-14 lg:px-16">
      <h1 className="text-xl font-bold text-neutral-900 mb-8">Pilihan Pelatihan</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {departmentList?.map((department, index) => {
          return (
            <SuspenseError loadingFallback={<CardLoading />} key={index}>
              <Card
                href={`/rencana-pelatihan/informasi-pelatihan/${department.id}`}
                hasImage
                src={department?.thumbnail}
                imgheight={100}
                imgwidth={100}
                imgStyle="w-full"
                className="bg-neutral-50 w-full rounded-md overflow-hidden hover:shadow-lg transition-all ease-in-out duration-150 shadow-sm"
              >
                <TrainingPlanCardContent
                  title={department?.name}
                  subTitle={`${department?.point as unknown as string} Poin`}
                  desc={department?.category}
                />
              </Card>
            </SuspenseError>
          );
        })}
      </section>
    </main>
  );
};

export default TrainingPlanMain;
