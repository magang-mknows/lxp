import { FC, ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const GlimpseKnowledgeSearch: FC = (): ReactElement => {
  return (
    <div className="flex items-center px-4 md:px-6 gap-4 py-4">
      <AiOutlineSearch className="text-neutral-400 text-xl" />
      <input
        type={"text"}
        className="bg-neutral-100 text-sm text-neutral-700 w-full focus:outline-none"
        placeholder="Cari Mata Kuliah"
      />
    </div>
  );
};

export default GlimpseKnowledgeSearch;
