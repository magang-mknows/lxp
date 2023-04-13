"use client";
import Image from "next/image";
import React, { FC, ReactElement } from "react";

const AnalyticIcon: FC = (): ReactElement => {
  return (
    <section className="bg-[#A3CCAB4D] col-span-3 lg:col-span-1 py-10 px-4">
      <Image
        src={`/assets/analytic/report.svg`}
        alt="offer-view"
        className=" w-full h-80 relative z-20  "
        height={100}
        width={100}
        loading="eager"
      />
    </section>
  );
};

export default AnalyticIcon;
