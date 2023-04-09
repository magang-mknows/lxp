"use client";
import { TDrillSimulationType } from "@/store/drill-simulation/type";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import Button from "./Button";

const HistorySimulationCard: FC<TDrillSimulationType> = ({
  ImgSrc,
  category,
  lecture,
  location,
  schedule,
  title,
}): ReactElement => {
  console.log(schedule);
  return (
    <section className="w-full h-[140px] bg-neutral-50 flex justify-between items-center ">
      <section className="flex items-center gap-10 border-l-[10px] border-version3-500 px-4 py-4 rounded-md shadow-sm ">
        <figure className="h-[80px] rounded-md overflow-hidden  w-52 grid place-items-center shadow-sm ">
          <Image
            src={"/assets/drill/dummyImg.svg"}
            alt="dummy-view"
            width={100}
            height={100}
            className="w-auto h-auto rounded-lg  overflow-hidden "
            loading="eager"
          />
        </figure>
        <main>
          <h1 className="text-base text-neutral-800 mb-2 font-bold">{title}</h1>
          <p className="text-sm text-neutral-500">{lecture}</p>
        </main>
      </section>
      <section className="px-4 py-4 flex flex-col items-center gap-2 ">
        <Link passHref href={`drill-simulasi/perubahan-jadwal/${title}`}>
          <Button
            text="Ajukan Perubahan Jadwal"
            type="primary"
            size="large"
            className="!py-2 !text-xs"
          />
        </Link>
        {schedule.map((item, index) => {
          return (
            <h1 className="text-sm text-neutral-700" key={index}>
              {item.time.map((time, index) => {
                return (
                  <span key={index}>
                    {time.title} | {time.value}
                  </span>
                );
              })}
            </h1>
          );
        })}
      </section>
    </section>
  );
};

export default HistorySimulationCard;
