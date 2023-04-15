"use client";
import { EventRegModalState } from "@/modules/unique-event/unique-event-detail/store";
import { FC, lazy, ReactElement, Suspense } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import Button from "./button";
import Modal from "./Modal";
import { TCardContentProps } from "./types";

const RegisteredEventModal = lazy(() => import("./registered-event-modal"));

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
          <RegisteredEventModal />
        </Suspense>
      </Modal>
    </div>
  );
};

export default EventBannerInformation;
