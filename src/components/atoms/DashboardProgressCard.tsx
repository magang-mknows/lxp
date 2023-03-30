import { FC, Fragment, ReactElement } from "react";

import Image from "next/image";
import Button from "../atoms/Button";
import { TProgressCardProps } from "./types";

const DashboardProgressCard: FC<TProgressCardProps> = ({
  topic,
  milestone,
  title,
  totalClass,
  classAttended,
  percentage,
}): ReactElement => {
  return (
    <div className="border-[1px] border-neutral-200 rounded-md shadow-sm px-4 py-4 flex justify-between mb-6 flex-wrap gap-y-4">
      <section className=" flex gap-y-2 gap-x-6 items-center flex-wrap">
        <Image
          src={"/assets/dashboard/progress.svg"}
          height={100}
          width={100}
          alt="progress-view"
        />
        <section className="flex flex-col">
          <section className="mb-5">
            <h1 className="text-base text-neutral-800 font-bold">{topic}</h1>
            <p className="text-xs md:text-sm text-neutral-500">
              {milestone} | {title}
            </p>
          </section>
          <section className="flex flex-wrap items-center gap-2">
            <div className="w-full bg-neutral-300 rounded-full h-3 dark:bg-gray-700">
              <div
                className={`bg-secondary-blue-500 h-3 rounded-full`}
                style={{ width: percentage }}
              ></div>
            </div>
            <h1 className="text-sm text-neutral-400 w-full">
              {`${classAttended}/${totalClass}`} Pertemuan
            </h1>
          </section>
        </section>
      </section>
      <section className="flex items-center">
        {classAttended / totalClass !== 1 ? (
          <Button text="Lanjutkan Pelatihan" type="primary" size="large" />
        ) : (
          <Button
            text="complete"
            type="primary"
            size="large"
            disabled
            className="!bg-neutral-300 !text-neutral-400 !py-2.5"
          />
        )}
      </section>
    </div>
  );
};

export default DashboardProgressCard;
