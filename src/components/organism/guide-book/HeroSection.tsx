import React, { ReactElement } from "react";
import Image from "next/image";
import PanduanHero from "../../../../public/assets/guide/HeroGuideBook.svg";
import search from "../../../../public/assets/guide/search.svg";

const HeroSection = (): ReactElement => {
  return (
    <div className="px-8 md:14 lg:px-16">
      <div className="lg:grid lg:grid-cols-2 container lg:mx-auto mt-[30px] mb-[50px]">
        <div className="col-span-1 ">
          <div className="title">
            <h1 className=" text-[50px] font-[700]">Buku panduan </h1>
            <p className="text-[14px] font-[400] text-[#737373] dark:text-white">
              Berupa buku petunjuk penggunaan dan pengertian fitur- fitur yang ada di Website LMS
              M-KNOWS secara terperinci (isinya lebih detail jika dibandingkan video tutorial).
              Menjelaskan juga keunggulan dan manfaat fitur tersebut.
            </p>
          </div>
          <div className="seacrh lg:w-[700px] h-[56px] w-full bg-[#F5F5F5] dark:bg-[#232529] rounded-[8px] mt-[48px] flex items-center gap-4  ">
            <Image src={search} alt={"search"} className={"ml-[24px]"} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Cari informasi"
              className=" bg-[#F5F5F5] dark:bg-[#232529] w-full focus:outline-none"
            />
          </div>
        </div>
        <div className="col-span-1 grid place-content-end ">
          <Image src={PanduanHero} alt={""} className={" w-0 lg:w-full h-full"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
