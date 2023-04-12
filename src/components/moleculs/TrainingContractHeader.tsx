import { FC, ReactElement } from "react";
import { IoIosAdd } from "react-icons/io";
import Button from "../atoms/Button";
import TrainingContractInfo from "../atoms/TrainingContractInfo";

const TrainingContractHeader: FC = (): ReactElement => {
  return (
    <header className="px-8 md:px-14 lg:px-16 mb-8">
      <h1 className="text-xl text-neutral-800 font-bold mb-6">Pengajuan Pelatihan</h1>
      <section className="flex flex-wrap gap-y-2 justify-between items-end">
        <TrainingContractInfo />
        <aside>
          <Button
            iconPosition="left"
            icon={<IoIosAdd className="text-2xl" />}
            type="primary"
            text="Mengajukan"
            size="large"
            className="!bg-[#3EB449] !border-none hover:!bg-[#319a3b]"
          />
        </aside>
      </section>
    </header>
  );
};

export default TrainingContractHeader;
