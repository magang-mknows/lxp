"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

import { IoAdd } from "react-icons/io5";
import { HiOutlineMinusSmall } from "react-icons/hi2";

const ConsultingQuestionsList: FC<TCardContentProps> = ({ title, desc }): ReactElement => {
  return (
    <Transition
      as="div"
      show={true}
      enter="transition ease duration-500 transform"
      enterFrom="opacity-0 -translate-y-2"
      enterTo="opacity-100 translate-y-0"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-12"
    >
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              as="div"
              className="py-4 flex justify-between items-center text-sm cursor-pointer font-bold  bg-neutral-200/80 md:px-8 px-4 rounded-md w-full"
            >
              <p>{title}</p>
              <section className="h-6 w-6flex items-center justify-center flex-shrink-0">
                {!open ? <IoAdd /> : <HiOutlineMinusSmall />}
              </section>
            </Disclosure.Button>
            <Disclosure.Panel
              as="div"
              className="text-neutral-500 text-xs md:text-sm px-4 md:px-8 py-2"
            >
              {desc}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Transition>
  );
};

export default ConsultingQuestionsList;
