"use client";

import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import Button from "../atoms/Button";

const DashboardEvent: FC = (): ReactElement => {
  const [selectedEvent, setSelectedEvent] = useState(1);

  const dummyEvent = [
    {
      id: 1,
      image: "/assets/dashboard/penugasan.svg",
      topic: "Webinar Cyber Security",
      date: "27 Feb",
      time: "09.00 - 11.00 WIB",
      totalSpeakers: 1,
      audience: 72,
      quota: 100,
    },
    {
      id: 2,
      image: "/assets/dashboard/penugasan.svg",
      topic: "Webinar Cyber Crime",
      date: "27 Feb",
      time: "09.00 - 11.00 WIB",
      totalSpeakers: 1,
      audience: 72,
      quota: 100,
    },
    {
      id: 3,
      image: "/assets/dashboard/penugasan.svg",
      topic: "Webinar Mikrotik",
      date: "27 Feb",
      time: "09.00 - 11.00 WIB",
      totalSpeakers: 1,
      audience: 72,
      quota: 100,
    },
  ];
  return (
    <div className="bg-neutral-50 p-6 rounded-md shadow-sm w-full">
      <section className="relative">
        <section className="flex gap-1 absolute top-3 right-0">
          {dummyEvent.map((item, index) => {
            return (
              <span
                key={index}
                className={`${
                  selectedEvent == item.id ? "w-6 bg-version3-500" : "w-2 bg-neutral-300"
                } h-2 cursor-pointer  block rounded-lg transition-all ease-in-out duration-300`}
                onClick={() => {
                  setSelectedEvent(item.id);
                }}
              ></span>
            );
          })}
        </section>
      </section>
      {dummyEvent.map((item, index) => {
        return (
          <div key={index} className={`${item.id === selectedEvent ? "block" : "hidden"}`}>
            <section className="text-neutral-900 mb-4">
              <h1 className="text-lg font-bold text-neutral-900 dark:text-white">Acara Kampus</h1>
              <p className="text-sm text-neutral-500 ">{dummyEvent.length} Acara kampus tersedia</p>
            </section>
            <section className="flex gap-4 mb-4 h-26">
              <Image
                src={item.image}
                alt="test"
                className="h-[110px] w-[80px]"
                width={80}
                height={110}
              />
              <div>
                <h1 className="mb-2 text-neutral-900 font-bold">{item.topic}</h1>
                <section className="flex gap-2 xl:gap-4  flex-wrap xl:flex-nowrap">
                  <div className="flex flex-col ">
                    <section className="flex gap-2 items-center mb-2">
                      <div className="w-4 h-4 rounded-md bg-version3-400/50 flex items-center justify-center">
                        <MdNavigateNext className="text-version3-500" />
                      </div>
                      <p className="text-xs lg:text-sm text-neutral-400">{item.date}</p>
                    </section>
                    <section className="flex gap-2 items-center">
                      <div className="w-4 h-4 rounded-md bg-version3-400/50 flex items-center justify-center">
                        <MdNavigateNext className="text-version3-500" />
                      </div>
                      <p className="text-xs lg:text-sm text-neutral-400">
                        {item.totalSpeakers} Pemateri
                      </p>
                    </section>
                  </div>
                  <div className="flex flex-col ">
                    <section className="flex gap-2 items-center mb-2">
                      <div className="w-4 h-4 rounded-md bg-version3-400/50 flex items-center justify-center">
                        <MdNavigateNext className="text-version3-500" />
                      </div>
                      <p className="text-xs lg:text-sm  text-neutral-400">{item.time}</p>
                    </section>
                    <section className="flex gap-2 items-center">
                      <div className="w-4 h-4 rounded-md bg-version3-400/50 flex items-center justify-center">
                        <MdNavigateNext className="text-version3-500" />
                      </div>
                      <p className="text-xs lg:text-sm text-neutral-400">
                        {item.audience} / {item.quota} Peserta
                      </p>
                    </section>
                  </div>
                </section>
              </div>
            </section>
            <section className="flex justify-between items-center">
              <Button type="primary" text="Daftar Sekarang" size="large" />
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardEvent;
