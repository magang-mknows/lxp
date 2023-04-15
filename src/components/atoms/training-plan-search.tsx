import { FC, ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const TrainingPlanSearch: FC = (): ReactElement => {
  return (
    <div className="bg-neutral-100 h-[56px] mt-6 xl:w-[60%] lg:w-[70%] w-full md:w-[90%] rounded-md shadow-sm">
      <div className="flex items-center px-4 md:px-6 gap-4 py-4">
        <AiOutlineSearch className="text-neutral-400 text-xl" />
        <input
          type={"text"}
          className="bg-neutral-100 text-sm text-neutral-700 w-full focus:outline-none"
          placeholder="Cari Mata Kuliah"
        />
      </div>
    </div>
  );
};

export default TrainingPlanSearch;
