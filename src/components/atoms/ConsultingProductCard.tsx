import React, { FC, ReactElement } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { TCardContentProps } from "./types";

const ConsultingProductCard: FC<TCardContentProps> = ({
  title,
  icon,
  detailList,
}): ReactElement => {
  return (
    <div className="bg-neutral-50 w-full md:w-[380px] lg:w-[320px] h-[370px] drop-shadow-md relative rounded-md py-16">
      <div className="h-24 w-24 bg-neutral-50 text-6xl text-version3-500 -top-10 left-[40%] md:left-[38%] lg:left-[40%] absolute flex justify-center items-center rounded-full border-[3px] border-version2-400">
        {icon}
      </div>
      <h1 className="text-left md:text-center px-4 md:px-14 lg:px-16 font-bold text-neutral-800 text-lg mb-3 pt-4">
        {title}
      </h1>
      {detailList?.map((list, index) => {
        return (
          <section className="flex gap-2 px-4 text-2xl mb-2" key={index}>
            <MdOutlineNavigateNext className="w-5 flex-shrink-0 " />
            <h1 className="text-sm">{list}</h1>
          </section>
        );
      })}
    </div>
  );
};

export default ConsultingProductCard;
