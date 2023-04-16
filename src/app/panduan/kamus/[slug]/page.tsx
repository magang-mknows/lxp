"use client";
import React, { ReactElement } from "react";
import Image from "next/image";
import search from "/public/assets/guide/search.svg";
import { useRecoilValue } from "recoil";
import LayoutProvider from "@/providers/LayoutProvider";
import { filterOptionDictionary } from "@/modules/Guide/store";
import Breadcums from "@/components/atoms/Breadcums";
import Sidebar from "@/components/organism/guide-dictinoary/sidebar";
import { usePathname } from "next/navigation";
import { NextPage } from "next";


const DetailPage: NextPage = (): ReactElement => {
  const pathname = usePathname() as unknown as string;
  const slug = pathname.split("/");
  const getOption = useRecoilValue(filterOptionDictionary(slug[slug.length - 1]));
  const EndpointBreadCrumb = slug[slug.length - 1];
  const BreadCrumbEndpoint = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Panduan",
      link: "/panduan",
    },
    {
      name: "Kamus Kampus Gratis",
      link: "/panduan/kamus",
    },
    {
      name: `${EndpointBreadCrumb}`,
      link: `/panduan/kamus/${EndpointBreadCrumb}`,
    },
  ];

  return (
    <LayoutProvider className="!bg-[#FAFAFA]">
      <Breadcums items={BreadCrumbEndpoint} />
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center lg:gap-[90px]">
        <Sidebar />
        <div className="flex flex-col px-6 md:px-8 lg:px10 mt-[30px] mb-[50px]">
          <div className="col-span-1 ">
            <div className="title">
              <h1 className=" text-[50px] font-[700]">Kamus Kampus Gratis </h1>
              <p className="text-[14px] font-[400] text-[#737373] dark:text-white">
                Berupa kumpulan istilah yang sering digunakan yang berkaitan dengan penggunaan dan
                fungsi fitur <br /> yang ada di Website LMS M-Knows
              </p>
            </div>
            <div className="seacrh lg:w-[700px] h-[56px] w-full bg-[#F5F5F5] dark:bg-[#232529] rounded-[8px] my-5 flex items-center gap-4  ">
              <Image src={search} alt={"search"} className={"ml-[24px]"} />
              <input
                type="text"
                name=""
                id=""
                placeholder="Cari informasi"
                className=" bg-[#F5F5F5] w-full focus:outline-none"
              />
            </div>
          </div>
          {getOption.map((item, index) => {
            return (
              <div
                key={index}
                className="lg:w-[700px] w-full rounded-[8px] flex flex-col place-content-center my-5 bg-[#F5F5F5] shadow-sm dark:bg-[#232529] text-black dark:text-white px-[10px] p-4"
              >
                <div className="font-bold text-xl my-1">{item.title}</div>
                <div className="font-medium my-2 text-sm lg:text-base">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </LayoutProvider>
  );
};

export default DetailPage;
