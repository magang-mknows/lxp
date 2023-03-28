import { FC, ReactElement } from "react";

import { BsQuestionCircle } from "react-icons/bs";

import { usePathname } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

const NavbarAskMenu: FC = (): ReactElement => {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/tentang" || pathname === "/kontak") {
    return (
      <div className="bg-neutral-100 w-9 h-9 flex items-center justify-center rounded-md shadow-sm">
        <BsQuestionCircle className="text-[20px] text-neutral-900 hover:text-version3-500 transition-colors ease-in-out duration-300 cursor-pointer" />
      </div>
    );
  } else {
    return (
      <div className=" flex items-center border-[1px] border-neutral-300 rounded-md bg-neutral-100 h-9 px-3 w-20 md:w-40 lg:w-80 justify-between">
        <input
          type="text"
          placeholder="Cari"
          className="bg-neutral-100 w-full text-sm outline-none"
        />
        <AiOutlineSearch className="text-[20px]  text-neutral-900 hover:text-version3-500 transition-colors ease-in-out duration-300 cursor-pointer" />
      </div>
    );
  }
};

export default NavbarAskMenu;
