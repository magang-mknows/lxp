"use client";
import { FC, ReactElement } from "react";

import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { TDrillSimulationType } from "@/modules/drill-simulation/type";

const RequestSimulationCard: FC<TDrillSimulationType> = ({
  ImgSrc,
  category,
  lecture,
  schedule,
  title,
}): ReactElement => {
  return (
    <section className="w-full bg-neutral-50 hover:shadow-md hover:bg-neutral-100 transition-all ease-in-out duration-300 rounded-md overflow-hidden shadow-sm">
      <Image
        src={"/assets/drill/dummyImg.svg"}
        alt="dummy-view"
        width={100}
        height={100}
        className="w-full "
      />
      <main className="px-4 py-4">
        <section className="flex mb-2 gap-3 ">
          <span className="w-fit px-2 py-0.5 rounded-md shadow-sm text-xs text-neutral-50 bg-version2-400">
            {lecture}
          </span>
          {schedule.length != 0 && (
            <span className="w-fit px-2 py-0.5 rounded-md shadow-sm text-xs text-neutral-50 bg-version3-500">
              {schedule.length} Jadwal Tersedia
            </span>
          )}
        </section>
        <h1 className="font-bold text-base mb-2">{title}</h1>
        <Link
          href={`drill-simulasi/pengajuan-jadwal/${title}`}
          passHref
          className="w-full flex justify-start xl:justify-end"
        >
          <Button
            type="primary"
            size="large"
            text={schedule.length !== 0 ? "Lihat Jadwal Simulasi" : "Tidak Ada Jadwal Tersedia"}
            className={`${
              schedule.length === 0 && "!bg-neutral-300 !text-neutral-400 !border-none !text-xs"
            }`}
          />
        </Link>
      </main>
    </section>
  );
};

export default RequestSimulationCard;
