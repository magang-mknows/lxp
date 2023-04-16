"use client";
import Image from "next/image";
import Dummy from "/public/assets/pelatihanku/Dummy.svg";
import { FC, Fragment, ReactElement } from "react";
import Icon2 from "/public/assets/pelatihanku/matkul.svg";
import Search from "/public/assets/pelatihanku/search.svg";
import DefaultView from "/public/assets/StudyPlan/DataKosong.png";
import ImgChoiceFaculty2 from "/public/assets/StudyPlan/choicefaculty2.svg";
import Card from "@/components/atoms/Card";

const page: FC = (): ReactElement => {
  const heroTes = [
    { icon: Icon2, jumlah: "6", detail: "pelatihan", warna: "#E3FBDA" },
    { icon: Icon2, jumlah: "144", detail: "poin", warna: "#FEF6D0" },
    { icon: Icon2, jumlah: "3.187", detail: "karyawan", warna: "#E9F6FD" },
  ];

  const content = [
    {
      src: ImgChoiceFaculty2,
      namaDosen: "Indah Saritem, S. AK, M.Ak",
      tipematkul: 4,
      pertemuan: 14,
      kodematkul: 1142,
      sks: 131,
      slug: "/software-engineering",
    },
    {
      src: ImgChoiceFaculty2,
      namaDosen: "Indah Saritem, S. AK, M.Ak",
      tipematkul: 4,
      pertemuan: 14,
      kodematkul: 1142,
      sks: 131,
      slug: "/software-engineering",
    },
    {
      src: ImgChoiceFaculty2,
      namaDosen: "Indah Saritem, S. AK, M.Ak",
      tipematkul: 4,
      pertemuan: 14,
      kodematkul: 1142,
      sks: 131,
      slug: "/software-engineering",
    },
    {
      src: ImgChoiceFaculty2,
      namaDosen: "Indah Saritem, S. AK, M.Ak",
      tipematkul: 4,
      pertemuan: 14,
      kodematkul: 1142,
      sks: 131,
      slug: "/software-engineering",
    },
  ];

  return (
    <Fragment>
      <div className=" w-screen px-8 md:px-14 lg:px-16 py-5">
        {/* Hero section */}
        <div className="flex lg:flex-row flex-col gap-6 ">
          <div className="lg:basis-1/4 lg:justify-start justify-center sm:hidden lg:inline-block xs:inline-block">
            <Image
              src={Dummy}
              alt={"dummy"}
              className=" object-cover h-44 w-full lg:w-full lg:h-auto rounded-lg "
            />
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-[28px] text-[22px] font-[700] text-[#171717]">
              Pelatihan Keterampilan Komunikasi
            </h1>
            <p className="text-[#525252] text-[14px] font-[400] py-2">
              Akuntasi adalah belajar cara memelihara keuangan. Ini mempersiapkan siswa untuk
              menjadi akuntan dengan mengajar mereka tentang prinsip-prinsip akuntansi seperti
              audit, pelaporan, penganggaran dan peraturan pajak.
            </p>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-rows-1 lg:gap-x-6 sm:gap-x-3 rounded-lg py-4 gap-y-4 lg:w-[75%] w-full">
              {heroTes.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{ background: item.warna }}
                    className="flex justify-start rounded-lg items-center gap-3 "
                  >
                    <Image
                      src={item.icon}
                      alt="icon"
                      className="w-8 h-8 lg:ml-7 md:ml-7 sm:ml-28 ml-10"
                    />
                    <div className="flex flex-col py-4 text-black">
                      <p className="text-[#262626] text-[16px] font-[600]">{item.jumlah}</p>
                      <p className="text-[#262626] text-[12px] font-[500]">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <>
          {/* Title, Seach bar */}
          <div className="flex justify-center items-center flex-col mt-10">
            <h1 className="text-[#171717] text-[24px] font-[700]">Mata Kuliah</h1>
            <div className="bg-[#FAFAFA] dark:bg-gray-300 dark:text-white  w-full h-[56px] mt-10 mb-10 rounded-[8px]">
              <div className="flex lg:ml-5 px-3 py-4">
                <Image src={Search} alt={"search"} width={28} />
                <input
                  type={"text"}
                  className="bg-[#FAFAFA] w-full focus:outline-none"
                  placeholder="Cari Mata Kuliah"
                />
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="flex md:flex-row md:flex-wrap flex-col gap-7 md:justify-start justify-center pb-40">
            <>
              {content.length === 0 ? (
                <div className="flex flex-col w-screen h-screen gap-8 justify-center lg:items-center ">
                  <div className="lg:flex hidden h-auto w-auto bg-gray-100 dark:bg-gray-600 rounded-full p-1 lg:p-4">
                    <Image src={DefaultView} alt="simulasi-null" />
                  </div>
                  <h1 className="text-xl font-bold">Tidak Ada Data Mata Kuliah</h1>
                </div>
              ) : (
                content.map((x, i) => (
                  <Card
                    key={i}
                    hasImage={true}
                    className="rounded-lg shadow-lg lg:w-[31%] md:w-[47%] w-full"
                    imgStyle="rounded-lg h-[241px] "
                    src={x.src}
                    titleStyle={"text-xl font-bold mt-0 text-[#106FA4]"}
                    icon={
                      <div className="flex justify-end gap-2 py-2">
                        <div className="lg:h-[22px] text-[#FAB317] px-2 my-[10px] text-[12px] rounded-[5px]  bg-[#FEF6D0]">
                          {x.sks} SKS
                        </div>
                        <div className="lg:h-[22px] text-[#106FA4] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#E9F6FD]">
                          {x.pertemuan} Pertemuan
                        </div>
                      </div>
                    }
                  >
                    <div className="flex flex-col w-full">
                      <p className="text-md text-gray-500">{x.kodematkul}</p>
                      <h1 className="text-lg font-bold mt-0 text-[#106FA4] w-full">
                        Matkul {x.tipematkul}
                      </h1>
                      <p className="text-md text-gray-500 pb-4">{x.namaDosen}</p>
                      <div className="flex w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-gray-400 ext-sm pt-20 pl-2">45%</p>
                  </Card>
                ))
              )}
            </>
          </div>
        </>
      </div>
    </Fragment>
  );
};

export default page;
