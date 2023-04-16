"use client";
import { TDrillSimulationType } from "@/modules/drill-simulation/type";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import Button from "./Button";
import Modal from "./Modal";
import RequestSceduleSuccessModal from "./RequestSceduleSuccessModal";
import { finishPopupState } from "@/modules/drill-simulation/store";

const HistorySimulationCard: FC<TDrillSimulationType> = ({
  ImgSrc,
  category,
  lecture,
  location,
  schedule,
  title,
  status,
}): ReactElement => {
  const [isShowFinishPopup, setShowFinishPopup] = useRecoilState(finishPopupState);

  return (
    <section className="w-full min-h-[140px] mb-4 bg-neutral-50 shadow-sm hover:shadow-md hover:bg-neutral-100 transition-all ease-in-out duration-150 flex flex-wrap justify-between items-center border-l-[10px] border-version3-500 rounded-md overflow-hidden cursor-pointer">
      <section className="flex items-center bg-neutral-50/0 gap-10 px-4 py-4 rounded-md ">
        <figure className="h-[80px] rounded-md overflow-hidden  w-52 grid place-items-center ">
          <Image
            src={"/assets/drill/dummyImg.svg"}
            alt="dummy-view"
            width={100}
            height={100}
            className="w-auto h-auto rounded-lg  overflow-hidden "
            loading="eager"
          />
        </figure>
        <main>
          <h1 className="text-base text-neutral-800 mb-2 font-bold">{title}</h1>
          <p className="text-sm text-neutral-500">{lecture}</p>
        </main>
      </section>
      <section className="px-4 py-4 flex flex-col items-center gap-2 ">
        {status === "finished" ? (
          <div
            className="flex  w-full items-start lg:items-center flex-col gap-1"
            onClick={() => {
              setShowFinishPopup(true);
            }}
          >
            <AiFillCheckCircle className="text-xl text-[#3EB449]" />
            <h1 className="text-sm font-bold text-[#3EB449]">SELESAI</h1>
          </div>
        ) : (
          <Link passHref href={`drill-simulasi/perubahan-jadwal/${title}`}>
            <Button
              text="Ajukan Perubahan Jadwal"
              type="primary"
              size="large"
              className="!py-2 !text-xs"
            />
          </Link>
        )}
        {schedule.map((item, index) => {
          return (
            <h1 className="text-sm text-neutral-700" key={index}>
              {item.time.map((time, index) => {
                return (
                  <span key={index}>
                    {time.title} | {time.value}
                  </span>
                );
              })}
            </h1>
          );
        })}
      </section>
      <Modal
        withClose={false}
        hasImage={false}
        lookup={isShowFinishPopup}
        onClose={() => {
          setShowFinishPopup(false);
        }}
      >
        <RequestSceduleSuccessModal title="Anda Telah Selesai Melakukan Simulasi!" type="finished">
          <p className="text-neutral-500 text-sm text-center">
            Kamu telah melakukan simulasi di tanggal{" "}
            {schedule.map((item, index) => {
              return (
                <span key={index} className="font-bold">
                  {item.time.map((time, index) => {
                    return (
                      <span key={index}>
                        {time.title} pukul {time.value}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </p>
          <section className="w-full flex justify-center pt-4">
            <Button
              type="primary"
              text="tutup"
              size="medium"
              onClick={() => {
                setShowFinishPopup(false);
              }}
            />
          </section>
        </RequestSceduleSuccessModal>
      </Modal>
    </section>
  );
};

export default HistorySimulationCard;
