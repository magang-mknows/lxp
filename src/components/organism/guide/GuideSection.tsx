"use client";

import React, { ReactElement } from "react";
import BukuPanduan from "/public/assets/guide/buku-panduan.svg";
import VideoPlayer from "/public/assets/guide/video-player.svg";
import Kamus from "/public/assets/guide/kamus.svg";
import Image from "next/image";
import Link from "next/link";

const GuideSection = (): ReactElement => {
  const dummyGuide = [
    {
      title: "Buku Panduan",
      desc: "Panduan ini berisi dokumen-dokumen panduan.",
      img: BukuPanduan,
      href: "/panduan/buku-panduan",
    },
    {
      title: "Video Panduan",
      desc: "Panduan ini berisi video-video panduan.",
      img: VideoPlayer,
      href: "/panduan/video-panduan",
    },
    {
      title: "Kamus LMS",
      desc: "Panduan ini berisi konten LMS M-Knows.",
      img: Kamus,
      href: "/panduan/kamus",
    },
  ];
  return (
    <div className="mt-[76px] mb-[64px] px-10">
      <div className="grid lg:grid-cols-12 gap-[20px]">
        {dummyGuide.map((item, index) => {
          return (
            <div
              key={index}
              className="col-span-4 bg-white dark:bg-[#111D2D] shadow-md w-full h-full rounded-[8px] pr-7"
            >
              <Link href={item.href}>
                <div className=" p-5">
                  <Image src={item.img} alt={"buku-panduan"} />
                  <h1 className="text-[18px] text-black dark:text-white font-[700]">
                    {item.title}
                  </h1>
                  <p className="text-[14px] text-black dark:text-white font-[400]">{item.desc}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuideSection;
