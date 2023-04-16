import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { useRecoilState } from "recoil";
import Button from "./Button";
import { EventRegModalState } from "@/modules/unique-event/store";

const RegisteredEventModal: FC = (): ReactElement => {
  const [getModalState, setModalState] = useRecoilState(EventRegModalState);

  return (
    <main className="flex flex-col items-center px-10">
      <Image src={"/assets/unique-event/success.svg"} alt="success-view" height={50} width={300} />
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
  );
};

export default RegisteredEventModal;
