"use client";
import { FC, ReactElement } from "react";
import Card from "../atoms/Card";
import TrainingPlanCardContent from "../atoms/TrainingPlanCardContent";

const TrainingPlanMain: FC = (): ReactElement => {
  return (
    <main className="px-8 md:px-14 lg:px-16">
      <h1 className="text-xl font-bold text-neutral-900 mb-8">Pilihan Pelatihan</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card
          href="/rencana-pelatihan/kontrak-pelatihan/test"
          hasImage
          src={"/assets/training-plan/dummyImg.svg"}
          imgheight={100}
          imgwidth={100}
          imgStyle="w-full"
          className="bg-neutral-50 w-full rounded-md overflow-hidden hover:shadow-lg transition-all ease-in-out duration-150 shadow-sm"
        >
          <TrainingPlanCardContent
            title="Pelatihan Kewarganegaraan"
            subTitle="20 Poin"
            desc="14 Pertemuan"
          />
        </Card>
      </section>
    </main>
  );
};

export default TrainingPlanMain;
