import Image from "next/image";
import React, { ReactElement } from "react";

const HeroSection = (): ReactElement => {
  return (
    <div className=" lg:px-14 px-5 ">
      <div className="items-center px-8 md:px-14 lg:px-16 bg-[#FFFF] rounded-[8px] ">
        <h3 className="text-black dark:text-white lg:text-[25px] text-[20px] text-center font-bold pt-[13px] pb-5">
          Pelatihan Keterampilan Komunikasi
        </h3>
        <div className="w-full h-[253px]">
          <Image
            src={"/assets/course/course-home-1.svg"}
            alt=""
            className="h-full object-cover rounded-lg mx-auto w-auto"
            width={100}
            height={100}
          />
        </div>
        <p className="text-sm font-normal text-neutral-800 dark:text-neutral-400 text-justify py-10 ">
          Manajemen Keuangan belajar tentang bagaimana merencanakan, mengelola, serta menggunakan
          sumber daya keuangan perusahaan. Perkuliahan jurusan ini juga tentang lembaga perbankan,
          kinerja perusahaan, perpajakan, akuntansi, perdagangan internasional, perencanaan modal,
          asuransi, anggaran, analisis keuangan, akuisisi dana, manajemen utang dan aset, hingga
          portofolio dan manajemen investasi. Pengawasan berbagai aspek keuangan guna mencegah
          kesalahan atau kecurangan juga dipelajari selama kuliah.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
