"use client";
import { Menu, Transition } from "@headlessui/react";
import { FC, ReactElement } from "react";
import { BiCategoryAlt } from "react-icons/bi";

import { HiChatAlt2 } from "react-icons/hi";
import { MdEmojiPeople } from "react-icons/md";
import { IoAnalyticsOutline, IoBag } from "react-icons/io5";
import Link from "next/link";

const NavbarFeatureMenu: FC = (): ReactElement => {
  return (
    <Menu as="div" className={"relative inline-block text-left z-50 left-0"}>
      <Menu.Button>
        <div className="bg-neutral-100 w-9 h-9 flex items-center justify-center rounded-md shadow-sm">
          <BiCategoryAlt className="text-[20px] text-neutral-800 hover:text-version3-500 transition-colors ease-in-out duration-300" />
        </div>
      </Menu.Button>

      <Transition
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-12"
      >
        <Menu.Items className="absolute right-0 top-2 origin-top-right   bg-white   shadow-md   rounded-md overflow-hidden">
          <div className="bg-version3-500 h-[92px] w-[240px] md:w-[270px] flex gap-1 flex-col items-center justify-center">
            <h1 className="text-neutral-100 font-bold text-xl">Fitur</h1>
            <p className="text-neutral-50 bg-version3-400 text-sm px-2 py-1 rounded-md shadow-sm">
              Total 16 Fitur
            </p>
          </div>
          <div className="grid grid-cols-2 ">
            <Menu.Item
              as="div"
              aria-label="User"
              className={
                "flex flex-col gap-2 items-center p-4 cursor-pointer bg-neutral-100 hover:bg-neutral-200 transition-all duration-300 ease-in-out"
              }
            >
              <HiChatAlt2 className="bg-version3-500 text-neutral-100 rounded-md p-2" size={32} />
              <h1 className="text-neutral-900 text-xs text-center">Diskusi Global</h1>
            </Menu.Item>
            <Menu.Item
              as="div"
              className={
                "flex flex-col gap-2 items-center p-4 cursor-pointer bg-neutral-100 hover:bg-neutral-200 transition-all duration-300 ease-in-out"
              }
            >
              <MdEmojiPeople className="bg-[#106FA4] text-neutral-50 rounded-md p-2" size={32} />
              <h1 className="text-neutral-900 text-xs text-center">Perencanaan Karir</h1>
            </Menu.Item>
            <Menu.Item
              as="div"
              className={
                "flex flex-col gap-2 items-center p-4 cursor-pointer bg-neutral-100 hover:bg-neutral-200 transition-all duration-300 ease-in-out"
              }
            >
              <IoAnalyticsOutline
                className="bg-version2-300 text-neutral-100 rounded-md p-2"
                size={32}
              />
              <h1 className="text-neutral-900 text-xs text-center">Analitik</h1>
            </Menu.Item>
            <Menu.Item
              as="div"
              className={
                "flex flex-col gap-2 items-center p-4 cursor-pointer bg-neutral-100 hover:bg-neutral-200 transition-all duration-300 ease-in-out"
              }
            >
              <IoBag className="bg-warning-500 text-neutral-100 rounded-md p-2" size={32} />
              <h1 className="text-neutral-900 text-xs text-center">Penyeluran Kerja</h1>
            </Menu.Item>
          </div>
          <Link href={"/semua-fitur"} passHref>
            <div className="bg-neutral-200 hover:bg-neutral-300 cursor-pointer transition-colors ease-in-out duration-300 w-full flex items-center group justify-center py-4">
              <h1 className="text-xs text-neutral-500 group-hover:text-neutral-900">Lihat Semua</h1>
            </div>
          </Link>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavbarFeatureMenu;
