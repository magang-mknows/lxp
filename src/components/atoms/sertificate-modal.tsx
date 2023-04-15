"use client";
import { showDetailSertificate } from "@/modules/score-sertificate/store";
import Image from "next/image";
import { FC, ReactElement } from "react";
import { ImCloudDownload } from "react-icons/im";
import { useSetRecoilState } from "recoil";
import Button from "./button";
import { TCardContentProps } from "./types";

const SertificateModal: FC<TCardContentProps> = ({ srcImg }): ReactElement => {
  const setModalOpen = useSetRecoilState(showDetailSertificate);

  return (
    <section className="flex flex-col gap-2">
      <Image
        src={"/assets/score-sertificate/sertificate.svg"}
        alt="sertificate-view"
        height={100}
        width={100}
        loading="lazy"
        className="h-full bg-primary-300 w-[500px] mb-2 rounded-md"
      />
      <div className="grid grid-cols-2 gap-3">
        <Button
          icon={<ImCloudDownload className="text-xl" />}
          text="Unduh"
          type="primary"
          size="full"
          onClick={() => {
            setModalOpen(false);
          }}
        />
        <Button
          text="Kembali"
          type="secondary"
          size="full"
          onClick={() => {
            setModalOpen(false);
          }}
        />
      </div>
    </section>
  );
};

export default SertificateModal;
