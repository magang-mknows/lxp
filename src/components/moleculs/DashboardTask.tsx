"use client";
import { FC, ReactElement, useState } from "react";

import { MdNavigateNext } from "react-icons/md";
import { AiFillWarning } from "react-icons/ai";

import Image from "next/image";
import Button from "../atoms/Button";

const DashboardTask: FC = (): ReactElement => {
  const [selectedTask, setSelectedTask] = useState(1);

  const dummyPenugasan = [
    {
      id: 1,
      image: "/assets/dashboard/acara.svg",
      topic: "Japanese Culture",
      title: "Introduction to Japanese Culture",
      milstone: "Tugas Pertemuan 1",
      teacher: "Bagas Saputra, M. Kom.",
      dueDate: "Terakhir 28 Februari 2023",
    },
    {
      id: 2,
      image: "/assets/dashboard/acara.svg",
      topic: "Indonesia Culture",
      title: "Introduction to Indonesia Culture",
      milstone: "Tugas Pertemuan 2",
      teacher: "Bagas Saputra, M. Kom.",
      dueDate: "Terakhir 28 April 2023",
    },
    {
      id: 3,
      image: "/assets/dashboard/acara.svg",
      topic: "Bekasi Culture",
      title: "Introduction to Bekasi Culture",
      milstone: "Tugas Pertemuan 1",
      teacher: "Bagas Saputra, M. Kom.",
      dueDate: "Terakhir 28 Maret 2023",
    },
  ];
  return (
    <div className="bg-neutral-50 p-7 rounded-md shadow-sm w-full ">
      <div className="w-full h-full flex justify-center items-center">
        <section className="flex flex-col items-center justify-center ">
          <Image
            src={"/assets/dashboard/emptyTask.svg"}
            alt="emptyTask"
            width={150}
            height={150}
            loading="eager"
            className="mb-2"
          />
          <h1 className="text-xs text-neutral-800 font-bold -mt-3">Yeyy..Belum ada penugasan</h1>
        </section>
      </div>
      {/* <section className="relative">
        <section className="flex gap-1 absolute top-3 right-0">
          {dummyPenugasan.map((item, index) => {
            return (
              <span
                key={index}
                className={`${
                  selectedTask == item.id
                    ? "w-6 bg-primary-500 dark:bg-[#17A2B8] "
                    : "w-2 bg-neutral-300"
                } h-2 cursor-pointer  block rounded-lg transition-all ease-in-out duration-300`}
                onClick={() => {
                  setSelectedTask(item.id);
                }}
              ></span>
            );
          })}
        </section>
      </section>
      {dummyPenugasan.map((item, index) => {
        return (
          <div key={index} className={`${item.id === selectedTask ? "block" : "hidden"}`}>
            <section className="text-neutral-900 mb-4">
              <h1 className="text-lg font-bold dark:text-white">Penugasan</h1>
              <p className="text-sm text-neutral-500 ">{item.topic}</p>
            </section>
            <section className="flex gap-4 mb-4 h-26">
              <Image
                src={item.image}
                alt="test"
                className="h-[110px] w-[80px]"
                height={110}
                width={80}
              />
              <div>
                <h1 className="mb-2 font-bold">{item.title}</h1>
                <section className="flex gap-2 items-start lg:items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center">
                    <MdNavigateNext className="text-primary-500 dark:text-white" />
                  </div>
                  <p className="text-xs lg:text-sm text-neutral-400">{item.milstone}</p>
                </section>
                <section className="flex gap-2 items-start lg:items-centers">
                  <div className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center">
                    <MdNavigateNext className="text-primary-500 dark:text-white" />
                  </div>
                  <p className="text-xs lg:text-sm   text-neutral-400">{item.teacher}</p>
                </section>
              </div>
            </section>
            <section className="flex  justify-between gap-y-4 items-center">
              <Button type="primary" text="Kerjakan Sekarang" size="large" />

              <div className="text-warning-500 lg:justify-end flex items-center gap-2 text-xs lg:text-sm w-52">
                <AiFillWarning />
                <h1 className="text-xs ">{item.dueDate}</h1>
              </div>
            </section>
          </div>
        );
      })} */}
    </div>
  );
};

export default DashboardTask;
