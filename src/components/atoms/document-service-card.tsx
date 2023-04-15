import React, { FC } from "react";

import { FcFolder } from "react-icons/fc";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { TCardContentProps } from "./types";

const DocumentServiceCard: FC<TCardContentProps> = ({ title, desc }) => {
  return (
    <div className="bg-neutral-50 rounded-md shadow-md px-10 py-10 w-full md:w-[300px] lg:w-[320px] h-[310px]">
      <FcFolder className="text-[140px] text-version3-400 mb-2 " />
      <h1 className="font-bold mb-6 h-12 ">{title}</h1>
      <section className="flex justify-between items-center">
        <p className="text-neutral-500 text-sm">{desc} template</p>
        <AiOutlineCloudDownload className="text-version3-500 cursor-pointer font-bold text-2xl" />
      </section>
    </div>
  );
};

export default DocumentServiceCard;
