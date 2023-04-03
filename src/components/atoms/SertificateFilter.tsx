"use client";
import { SertificateFilterOptions } from "@/utils/const";
import { Menu, Transition } from "@headlessui/react";
import { FC, ReactElement } from "react";
import { TbBrandMixpanel } from "react-icons/tb";
import Button from "./Button";

const SertificateFilter: FC = (): ReactElement => {
  return (
    <nav className="w-full flex justify-end">
      <Menu as="div" className="relative inline-block text z-50 ">
        <Menu.Button name="theme-option" aria-label="theme-option">
          <Button text="Filter" icon={<TbBrandMixpanel />} type="secondary" size="small" />
        </Menu.Button>
        <Transition
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-12"
        >
          <Menu.Items className="absolute top-2 right-0 w-30 origin-top-right  overflow-hidden rounded-md bg-neutral-50 shadow-md">
            {SertificateFilterOptions.map((option, index) => {
              return (
                <div key={index} className="border-b-[0.5px] border-neutral-200">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? " border-primary-500 text-neutral-50 " : "border-neutral-50"
                        }  border-l-4 flex text-sm justify-between gap-2 w-full px-6 py-2 text-neutral-800 dark:text-white  ease-in-out dark:border-b-2 group dark:border-white/10 `}
                      >
                        {option}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
};

export default SertificateFilter;
