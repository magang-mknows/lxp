import React, { FC, ReactElement } from "react";

import DashbordResumeCard from "../atoms/DashbordResumeCard";

const DashbordResume: FC = (): ReactElement => {
  const dummySidebarItems = [
    {
      srcImg: "/assets/dashboard/labIcon.svg",
      desc: 0,
      title: "Kelas Terdaftar",
    },
    {
      srcImg: "/assets/dashboard/homeIcon.svg",
      desc: 0,
      title: "Sertifikat",
    },
    {
      srcImg: "/assets/dashboard/clockIcon.svg",
      desc: 0,
      title: "IPK Rata-rata",
    },
    {
      srcImg: "/assets/dashboard/trophyIcon.svg",
      desc: 0,
      title: "Total Poin",
    },
  ];

  return (
    <div className="w-full shadow-md  bg-neutral-50 shadow-neutral-100  rounded-md min-h-[540px] mb-10 overflow-hidden">
      <section className="text-neutral-50 bg-version2-400 rounded-md relative px-6 pt-12 pb-28">
        <h1 className="font-bold text-2xl mb-2">Hello, Bandi</h1>
        <p className="text-base mb-2">
          <section>
            <span className="text-neutral-50/75">Kamu </span>
            <span className="underline underline-offset-4 decoration-neutral-50/70">
              Belum mengambil Mata Kuliah
            </span>
            <span className="text-neutral-50/75"> Pada semester ini</span>
          </section>
          {/* <section >
            <span className="text-neutral-50/75">Kamu mengambil</span>
            <span className="underline underline-offset-4 decoration-neutral-50/70">4 Mata Kuliah </span>
          <span className="text-neutral-50/75">Pada semester ini</span>
          </section> */}
        </p>
        <section className="absolute -bottom-64  grid grid-cols-2 gap-4 lg:gap-2">
          {dummySidebarItems.map(({ srcImg, desc, title }, index) => {
            return (
              <DashbordResumeCard
                key={index}
                srcImg={srcImg}
                desc={desc as unknown as string}
                title={title}
              />
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default DashbordResume;
