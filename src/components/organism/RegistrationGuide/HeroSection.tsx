import React, { ReactElement } from "react";
import Alert from "../../../../public/assets/guide/alert.svg";
import Image from "next/image";

const HeroSection = (): ReactElement => {
  return (
    <div className="container lg:mx-auto mt-[30px] px-10 lg:px-0 mb-[50px]">
      <div className="mt-[56px]">
        <h1 className="text-center text-[20px] text-black font-[700] dark:text-white">
          Panduan pendaftaran
        </h1>
      </div>
      <div className="mt-[36px] bg-[#FEDBD7] w-full h-[135px] container mx-auto rounded-[8px] lg:mb-[30px] mb-[60px]   ">
        <div className="container px-[36px] lg:pt-[28px] lg:py-[16px] py-[10px]">
          <h1 className="text-[18px] font-[700] dark:text-black ">Penting !</h1>
          <div className="flex mt-[10px] gap-[17px] items-center ">
            <Image src={Alert} alt={"alert"} />
            <h1 className="lg:text-[18px] font-[300] dark:text-black">
              Silahkan cek email mu karena verifikasi hanya dikirimkan melalui email yang kamu
              daftarkan saja.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
