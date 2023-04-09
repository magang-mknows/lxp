import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import React, { FC, ReactElement } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { TButtonProps } from "./types";

const SceduleButton: FC<TButtonProps> = ({ text }): ReactElement => {
  return (
    <Disclosure.Button
      as="button"
      className="w-full px-6 py-3 bg-neutral-50  border-b-[0.5px] border-b-neutral-300"
    >
      <section className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={`/assets/drill/${
              text === "pagi" || text === "siang" || text === "sore" ? "day" : "night"
            }.svg`}
            alt="day-view"
            width={10}
            height={10}
            className="w-7"
          />
          <h1 className="font-bold text-sm">{text}</h1>
        </div>
        <IoMdArrowDropdown className="text-neutral-500 text-2xl" />
      </section>
    </Disclosure.Button>
  );
};

export default SceduleButton;
