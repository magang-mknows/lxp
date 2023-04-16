import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

const dummyGuide = [
  {
    title: "Panduan pendaftaran",
    img: "/assets/guide/book.svg",
    href: "/panduan/buku-panduan/panduan-pendaftaran",
  },
  {
    title: "Panduan masuk",
    img: "/assets/guide/book.svg",
    href: "/panduan/buku-panduan/panduan-pendaftaran",
  },
  {
    title: "Bagaimana caranya jika mengalami kesulitan",
    img: "/assets/guide/book.svg",
    href: "/panduan/buku-panduan/panduan-pendaftaran",
  },
  {
    title: "Bagaimana caranya jika saya ingin melakukan diskusi pada dosen",
    img: "/assets/guide/book.svg",
    href: "/panduan/buku-panduan/panduan-pendaftaran",
  },
  {
    title: "Panduan mendaftar studi",
    img: "/assets/guide/book.svg",
    href: "/panduan/buku-panduan/panduan-pendaftaran",
  },
  {
    title: "Hal apa saja yang saya lakukan saat melakukan quiz",
    img: "/assets/guide/book.svg",
    href: "/panduan/buku-panduan/panduan-pendaftaran",
  },
  {
    title: "Panduan diskusi global",
    img: "/assets/guide/book.svg",
    href: "/panduan/buku-panduan/panduan-pendaftaran",
  },
  {
    title: "Panduan  perencanaan karir",
    img: "/assets/guide/book.svg",
    href: "/panduan/buku-panduan/panduan-pendaftaran",
  },
  {
    title: "Panduan mendapatkan sertifikat",
    img: "/assets/guide/book.svg",
    href: "/panduan/buku-panduan/panduan-pendaftaran",
  },
];

const ContentSection = (): ReactElement => {
  return (
    <div className="w-full px-6 md:px-8 lg:px10  container lg:mx-auto mt-[30px] lg:px-16 mb-[50px]">
      <div className="title">
        <h1 className="font-[700] text-[16px]">Buku panduan lainnya</h1>
      </div>
      <div className="mt-[24px] mb-[54px]">
        {dummyGuide.map((item, index) => {
          return (
            <Link key={index} href={item.href}>
              <div className="content bg-white dark:bg-[#232529]  w-full h-[54px] shadow-neutral-300 shadow-sm sha rounded-[8px] flex justify-between items-center p-[24px] mt-[16px]">
                <h1 className="font-[600] text-[16px] dark:text-white">{item.title}</h1>
                <Image src={item.img} alt={"book"} width={30} height={30} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContentSection;
