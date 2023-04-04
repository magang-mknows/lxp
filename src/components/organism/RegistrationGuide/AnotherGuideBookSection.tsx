import React, { Fragment, ReactElement } from "react";
import Book from "../../../../public/assets/guide/book.svg";
import Image from "next/image";
import Link from "next/link";

const dummyGuide = [
  { title: "Panduan pendaftaran", img: Book, href: "/panduan/buku-panduan/panduan-pendaftaran" },
  {
    title: "Panduan  perencanaan karir",
    img: Book,
    href: "/panduan/buku-panduan/panduan-pendaftaran",
  },
  { title: "Panduan masuk", img: Book, href: "/panduan/buku-panduan/panduan-pendaftaran" },
];

const AnotherGuideBookSection = (): ReactElement => {
  return (
    <Fragment>
      <div className="container lg:mx-auto mt-[30px] px-10 lg:px-0 mb-[50px]">
        <div className="title">
          <h1 className="font-[700] text-[16px]">Buku panduan lainnya</h1>
        </div>
        <div className="mt-[24px] mb-[54px]">
          {dummyGuide.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <div className="content bg-white dark:bg-[#232529]   w-full h-[54px] shadow-lg rounded-[8px] flex justify-between items-center p-[24px] mt-[16px]">
                  <h1 className="font-[600] text-[16px]">{item.title}</h1>
                  <Image src={item.img} alt={"book"} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default AnotherGuideBookSection;
