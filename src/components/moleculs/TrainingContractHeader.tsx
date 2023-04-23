import { FC, ReactElement } from "react";
import { IoMdAdd } from "react-icons/io";
import Button from "../atoms/Button";
import TrainingContractInfo from "../atoms/TrainingContractInfo";
import { useRecoilState } from "recoil";
import { TrainingConfirmPopup } from "@/modules/training-plan/store";
import Modal from "../atoms/Modal";
import { IoAlertCircle } from "react-icons/io5";
import Link from "next/link";

const TrainingContractHeader: FC = (): ReactElement => {
  const [getConfirmPopup, setConfirmPopup] = useRecoilState(TrainingConfirmPopup);

  return (
    <header className="px-8 md:px-14 lg:px-16 mb-8">
      <h1 className="text-xl text-neutral-800 font-bold mb-6">Pengajuan Pelatihan</h1>
      <section className="flex flex-wrap gap-y-2 justify-between items-end">
        <TrainingContractInfo />
        <aside>
          <Button
            icon={<IoMdAdd />}
            iconPosition="left"
            type="primary"
            text="Mengajukan"
            size="large"
            className="!bg-[#3EB449] !px-8 !border-none hover:!bg-[#319a3b]"
            onClick={() => {
              setConfirmPopup(true);
            }}
          />
        </aside>
      </section>
      <Modal
        withClose={false}
        hasImage={false}
        lookup={getConfirmPopup}
        onClose={() => {
          setConfirmPopup(false);
        }}
      >
        <section className="flex flex-col px-10 py-6">
          <header className="flex flex-col gap-2 mb-4 justify-center items-center">
            <IoAlertCircle className="text-3xl text-version3-400" />
            <h1 className="font-bold text-base">Konfirmasi</h1>
          </header>
          <main>
            <div className="w-full grid place-items-center mb-2">
              <section className="flex gap-2 w-fit items-center bg-warning-100/50 px-4 py-2 rounded-md shadow-sm">
                <IoAlertCircle className="text-xl text-warning-500" />
                <h1 className="text-xs text-warning-500">
                  Kamu tidak dapat mengganti pelatihan yang telah dipilih
                </h1>
              </section>
            </div>
            <h1 className="text-sm text-neutral-800 mb-6">
              Kamu akan mengajukan{" "}
              <span className="font-bold">Pelatihan Keterampilan Interpersonal</span>
            </h1>
            <section className="flex gap-4 flex-wrap md:flex-nowrap">
              <Button
                type="secondary"
                size="full"
                text="Batal"
                className="!py-2.5"
                onClick={() => {
                  setConfirmPopup(false);
                }}
              />
              <Link passHref href={"/rencana-pelatihan/draft"} className="w-full">
                <Button
                  type="primary"
                  size="full"
                  text="Konfirmasi"
                  className="!py-2.5"
                  onClick={() => {
                    setConfirmPopup(false);
                  }}
                />
              </Link>
            </section>
          </main>
        </section>
      </Modal>
    </header>
  );
};

export default TrainingContractHeader;
