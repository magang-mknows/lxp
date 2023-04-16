"use client";
import { ReactElement } from "react";
import Image from "next/image";
import { ImSearch } from "react-icons/im";

const HeroSection = (): ReactElement => {
  return (
    <div className="lg:grid lg:grid-cols-2 container mt-[30px] px-10 lg:px-8 mb-[50px]">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className=" text-[50px] font-[700]">Video panduan </h1>
          <p className="text-[14px] font-[400] text-[#737373] dark:text-white">
            Berupa video tutorial penggunaan dan fungsi fitur yang ada di Website KG
          </p>
        </div>
        <div className="seacrh lg:w-[700px] h-[56px] w-full bg-neutral-100 dark:bg-[#232529] rounded-[8px] mt-[48px] flex items-center gap-4  ">
          <ImSearch className="ml-[24px] w-[20px] h-[20px] text-neutral-400" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari informasi"
            className=" bg-neutral-100 w-full focus:outline-none"
          />
        </div>
      </div>
      <div className="col-span-1 grid place-content-end ">
        <Image
          src={"/assets/guide/video-guide.svg"}
          alt={""}
          width={100}
          height={100}
          className={" w-0 lg:w-full h-full"}
        />
      </div>
    </div>
  );
};

export default HeroSection;
