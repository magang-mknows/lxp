"use client";
import { EventRegModalState } from "@/store/unique-event";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement, Suspense, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import Button from "./Button";
import Modal from "./Modal";
import { TCardContentProps } from "./types";

const EventBannerInformation: FC<TCardContentProps> = ({
  title,
  desc,
  list,
  subTitle,
}): ReactElement => {
  const [getModalState, setModalState] = useRecoilState(EventRegModalState);

  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold mb-7 text-neutral-900">{title}</h1>
      <div className="mb-7">
        <h1 className="text-lg text-neutral-600 mb-2">Benefit</h1>
        {list?.map((item, index) => {
          return (
            <div key={index} className="flex gap-x-1.5 items-center mb-2 text-sm text-neutral-800">
              <BsCheckCircleFill className="text-primary-600 text-lg" />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <h1 className="text-version3-500 font-bold text-2xl mb-7">{subTitle}</h1>
      <p className="text-sm text-neutral-600 mb-7">{desc}</p>
      <Button
        type="primary"
        text="Daftar Sekarang"
        size="extraLarge"
        onClick={() => {
          setModalState(true);
        }}
      />
      <Modal lookup={getModalState} onClose={() => setModalState(false)}>
        <Suspense>
          <main className="flex flex-col items-center px-10">
            <Image
              src={"/assets/unique-event/success.svg"}
              alt="success-view"
              height={50}
              width={300}
            />
            <h1 className="text-xl font-bold text-neutral-800">Kamu behasil Mendaftar</h1>
            <p className="text-sm text-neutral-700 mb-2">
              Kamu telah mendaftar webinar di hari
              <span className="text-version3-500"> Selasa, 28 Februari 2023 Pukul 19:00 WIB</span>
            </p>
            <section className="w-full mb-4 rounded-md shadow-sm bg-version2-400 px-2 py-2 flex justify-center">
              <p className="text-sm text-neutral-50">
                Untuk informasi lebih lanjut silakan pergi ke page
                <Link href={"/acara-unik/terdaftar"}>
                  <span className="font-bold underline"> Event Terdaftar</span>
                </Link>
              </p>
            </section>
            <section className="flex flex-wrap md:flex-nowrap justify-between gap-2 lg:gap-4 w-full mb-4">
              <Button
                type="secondary"
                size="full"
                text="Tutup"
                onClick={() => {
                  setModalState(false);
                }}
              />
              <Link href={"/acara-unik/terdaftar"} className="w-full">
                <Button type="primary" size="full" text="Event Terdaftar" />
              </Link>
            </section>
          </main>
        </Suspense>
      </Modal>
    </div>
  );
};

export default EventBannerInformation;
