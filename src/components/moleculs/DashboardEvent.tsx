"use client";

import { FC, ReactElement } from "react";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import Button from "../atoms/Button";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DashboardEvent: FC = (): ReactElement => {
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
    <div className="bg-neutral-50  p-6 rounded-md shadow-sm">
      <Carousel
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
        {dummyEvent.map((item, index) => {
          return (
            <div className="block" key={index}>
              <section className="text-neutral-900 mb-4 text-start">
                <h1 className="text-lg font-bold text-neutral-900 dark:text-white">Acara Kampus</h1>
                <p className="text-sm text-neutral-500 ">
                  {dummyEvent.length} Acara kampus tersedia
                </p>
              </section>
              <section className="flex items-center justify-start flex-wrap gap-4 mb-6 h-26 w-fit">
                <div className="flex items-center justify-start w-[92px]  md:w-[90px] ">
                  <Image src={item.image} alt="test" height={90} width={100} />
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="mb-2 text-start text-neutral-900 font-bold">{item.topic}</h1>
                  <section className="flex gap-x-4 gap-y-2 flex-wrap ">
                    <div className="flex flex-col ">
                      <section className="flex gap-2 items-center mb-2">
                        <div className="w-4 h-4 rounded-md bg-version3-400/50 flex items-center justify-center">
                          <MdNavigateNext className="text-version3-500" />
                        </div>
                        <p className="text-xs  text-neutral-400">{item.date}</p>
                      </section>
                      <section className="flex gap-2 items-center">
                        <div className="w-4 h-4 rounded-md bg-version3-400/50 flex items-center justify-center">
                          <MdNavigateNext className="text-version3-500" />
                        </div>
                        <p className="text-xs  text-neutral-400">{item.totalSpeakers} Pemateri</p>
                      </section>
                    </div>
                    <div className="flex flex-col ">
                      <section className="flex gap-2 items-center mb-2">
                        <div className="w-4 h-4 rounded-md bg-version3-400/50 flex items-center justify-center">
                          <MdNavigateNext className="text-version3-500" />
                        </div>
                        <p className="text-xs   text-neutral-400">{item.time}</p>
                      </section>
                      <section className="flex gap-2 items-center">
                        <div className="w-4 h-4 rounded-md bg-version3-400/50 flex items-center justify-center">
                          <MdNavigateNext className="text-version3-500" />
                        </div>
                        <p className="text-xs  text-neutral-400">
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
      </Carousel>
    </div>
  );
};

export default DashboardEvent;
