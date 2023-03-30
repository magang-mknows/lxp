import { FC, ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const ConsultingSearch: FC = (): ReactElement => {
  return (
    <div className="border-[3px] border-neutral-300 mb-10 rounded-md flex justify-between items-center h-10 px-4">
      <input type="text" placeholder="Cari chat" className="w-full outline-none text-sm" />
      <AiOutlineSearch className="text-xl text-version3-400" />
    </div>
  );
};

export default ConsultingSearch;
