"use client";
import Image from "next/image";
import { FC, ReactElement, useState } from "react";
import Modal from "./Modal";

import SertificateModal from "./SertificateModal";

const SertificateCard: FC = (): ReactElement => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <main className="flex  px-4 py-3 bg-neutral-50 rounded-md shadow-sm overflow-hidden flex-col items-center justify-center">
      <Image
        src={"/assets/score-sertificate/sertificate.svg"}
        alt="sertificate-view"
        height={100}
        width={100}
        loading="lazy"
        className="h-full bg-neutral-200 w-full mb-2 rounded-md cursor-pointer"
        onClick={() => setModalOpen(true)}
      />
      <p className="text-neutral-900 font-bold text-base">Pelatihan Keterampilan Manajerial</p>
      <p className="text-neutral-600 text-sm">Pelatihan</p>
      <Modal
        withClose={false}
        hasImage={false}
        lookup={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <SertificateModal />
      </Modal>
    </main>
  );
};

export default SertificateCard;
