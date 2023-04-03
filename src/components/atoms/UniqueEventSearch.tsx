import React, { FC, ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const UniqueEventSearch: FC = (): ReactElement => {
  return (
    <div className="w-full mb-8 bg-neutral-100 items-center px-3 py-3 rounded-md shadow-sm flex gap-2">
      <AiOutlineSearch className="text-xl text-neutral-400" />
      <input
        type="text"
        placeholder="Cari Webinar"
        className="w-full bg-neutral-100 outline-none border-none text-sm text-neutral-700"
      />
    </div>
  );
};

export default UniqueEventSearch;
