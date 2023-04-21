import { FC, ReactElement } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import Button from "./Button";
import { useSetRecoilState } from "recoil";
import { isModalOpen } from "@/modules/discussion-room/store";

const ReportSuccessModal: FC = (): ReactElement => {
  const setOptionOpen = useSetRecoilState(isModalOpen);

  return (
    <section className="flex flex-col items-center justify-center px-10 py-6">
      <div className="h-10 w-10 rounded-full grid place-items-center relative">
        <BsCheckCircleFill className="text-[#3EB449] text-4xl z-20" />
        <span className="h-10 w-10 right-0 left-0 block bg-blue-100 rounded-full absolute z-10"></span>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center py-2 w-[490px]">
        <h1 className="font-bold text-lg text-neutral-800">Terimakasih telah memberi tahu kami</h1>
        <p className="w-full text-center text-sm ">
          Masukan dari Anda sangat penting untuk membantu kami menjaga komunitas LMS M-Knows agar
          tetap aman.
        </p>
        <Button
          type="primary"
          size="full"
          text="Tutup"
          className="!py-2.5"
          onClick={() => {
            setOptionOpen(false);
          }}
        />
      </div>
    </section>
  );
};

export default ReportSuccessModal;
