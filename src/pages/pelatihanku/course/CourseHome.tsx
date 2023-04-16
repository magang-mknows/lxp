"use client";
import { FC, Fragment, ReactElement, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import imgCourseHome from "/public/assets/course/course-home-1.svg";
import imgModuleIcon from "/public/assets/course/module-icon.svg";
import imgQuizIcon from "/public/assets/course/quiz-icon.svg";
import imgAssignmentIcon from "/public/assets/course/assignment-icon.svg";
import imgDiscussionIcon from "/public/assets/course/discussion-icon.svg";
import imgDoneIcon from "/public/assets/course/done-icon.svg";
import imgLockIcon from "@/assets/course/lock-icon.svg";
import Link from "next/link";

const CourseHome: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className=" lg:px-14 px-5 ">
        <div className="items-center px-8 md:px-14 lg:px-16 bg-[#FFFF] rounded-[8px] mt-10">
          <h3 className="text-black dark:text-white text-[28px] text-center font-bold pt-[13px] pb-5">
            Pelatihan Keterampilan Komunikasi
          </h3>
          <div className="w-full h-[253px]">
            <Image src={imgCourseHome} alt="" className="h-full object-cover rounded-lg mx-auto" />
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

      <div className="gap-[30px] select-none px-8 md:px-14 lg:px-16 mt-[25px]">
        <div className="flex flex-col">
          <button
            className={`px-[30px] py-[14px] flex justify-between items-center rounded-lg text-white cursor-pointer bg-[#053D38]`}
          >
            <p className="text-lg text-[#FFFF] font-medium">Pertemuan 1</p>

            <MdArrowDropDown className={`text-3xl relative text-[#FFFF]`} />
          </button>

          <div className={`w-[94%] mx-auto visible bg-[#fff]`}>
            <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
              <div className="flex gap-x-6">
                <Image src={imgModuleIcon} alt="" />
                <Link
                  href="/studi-ku/course/modul"
                  className="text-base text-neutral-800 dark:text-neutral-400 hover:underline"
                >
                  Modul
                </Link>
              </div>
              <div className="">
                <Image src={imgDoneIcon} alt="" />
              </div>
            </div>
            <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
              <div className="flex gap-x-6">
                <Image src={imgQuizIcon} alt="" />
                <Link
                  href="/studi-ku/course/quiz"
                  className="text-base text-neutral-800 dark:text-neutral-400 hover:underline"
                >
                  Quiz
                </Link>
              </div>
              <div className="">
                <Image src={imgDoneIcon} alt="" />
              </div>
            </div>
            <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
              <div className="flex gap-x-6">
                <Image src={imgAssignmentIcon} alt="" />
                <Link
                  href="/studi-ku/course/penugasan-test"
                  className="text-base text-neutral-800 dark:text-neutral-400 hover:underline"
                >
                  Tugas
                </Link>
              </div>
              <div className="">
                <Image src={imgDoneIcon} alt="" />
              </div>
            </div>
            <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
              <div className="flex gap-x-6">
                <Image src={imgDiscussionIcon} alt="" />
                <Link
                  href="/studi-ku/course/diskusi"
                  className="text-base text-neutral-800 dark:text-neutral-400 hover:underline"
                >
                  Diskusi
                </Link>
              </div>
              <div className="">
                <Image src={imgDoneIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CourseHome;
