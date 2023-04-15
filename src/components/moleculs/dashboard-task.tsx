"use client";
import { FC, ReactElement } from "react";

import { MdNavigateNext } from "react-icons/md";
import { AiFillWarning } from "react-icons/ai";

import Image from "next/image";
import Button from "../atoms/button";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DashboardTask: FC = (): ReactElement => {
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
    <div className="bg-neutral-50  p-6 rounded-md shadow-sm">
      <section className="flex flex-col  h-full items-center justify-center ">
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
      {/* <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={true}
        showStatus={false}
        swipeable={true}
        className="w-full content-carousel"
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            <span
              className={`${
                isSelected ? "bg-primary-400 w-6" : "w-2 bg-neutral-300"
              } flex flex-row  h-2 rounded-full transition-all ease-in-out duration-300`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            ></span>
          );
        }}
      >
        {dummyPenugasan.map((item, index) => {
          return (
            <div className="block" key={index}>
              <section className="text-neutral-900 mb-4 text-start">
                <h1 className="text-lg font-bold text-neutral-900 dark:text-white">Penugasan</h1>
                <p className="text-sm text-neutral-500 ">{item.topic}</p>
              </section>
              <section className="flex items-center justify-start gap-4 mb-6 h-26 w-fit">
                <div className="flex items-center justify-start w-[96px]  md:w-[90px] ">
                  <Image src={item.image} alt="test" height={90} width={100} />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h1 className="mb-2 font-bold">{item.title}</h1>
                  <section className="flex gap-2 items-start lg:items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center">
                      <MdNavigateNext className="text-primary-500 dark:text-white" />
                    </div>
                    <p className="text-xs text-neutral-400">{item.milstone}</p>
                  </section>
                  <section className="flex gap-2 items-start lg:items-centers">
                    <div className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center">
                      <MdNavigateNext className="text-primary-500 dark:text-white" />
                    </div>
                    <p className="text-xs text-neutral-400">{item.teacher}</p>
                  </section>
                </div>
              </section>
              <section className="flex flex-wrap justify-between gap-y-4 items-center">
                <Button type="primary" text="Kerjakan Sekarang" size="large" />
                <div className="text-warning-500 lg:justify-end flex items-center gap-2 text-xs lg:text-sm px-0">
                  <AiFillWarning />
                  <h1 className="text-xs text-start ">{item.dueDate}</h1>
                </div>
              </section>
            </div>
          );
        })}
      </Carousel> */}
    </div>
  );
};

export default DashboardTask;
