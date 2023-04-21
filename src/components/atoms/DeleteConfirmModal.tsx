import { isModalOpen, selectedPostId } from "@/modules/discussion-room/store";
import { FC, ReactElement } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Button from "./Button";
import { FaTrash } from "react-icons/fa";

const DeleteConfirmModal: FC = (): ReactElement => {
  const setOptionOpen = useSetRecoilState(isModalOpen);
  const getSeletedPostId = useRecoilValue(selectedPostId);

  return (
    <section className="flex flex-col items-center justify-center px-10 py-6">
      <div className="h-10 w-10 rounded-full grid place-items-center relative">
        <FaTrash className="text-warning-500 text-4xl z-20" />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center py-2 w-[490px]">
        <h1 className="font-bold text-lg text-neutral-800">Konfirmasi</h1>
        <p className="w-full text-center text-sm mb-4 ">
          Apakah anda ingin menghapus postingan ini?
        </p>
        <section className="w-full flex gap-6">
          <Button
            type="secondary"
            size="full"
            text="Tutup"
            className="!py-2.5"
            onClick={() => {
              setOptionOpen(false);
            }}
          />
          <Button
            type="primary"
            size="full"
            text="Tidak"
            className="!py-2.5"
            onClick={() => {
              setOptionOpen(false);
            }}
          />
        </section>
      </div>
    </section>
  );
};

export default DeleteConfirmModal;
