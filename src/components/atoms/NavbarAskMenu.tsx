import { FC, ReactElement } from "react";

import { BsQuestionCircle } from "react-icons/bs";
// import { AiOutlineSearch } from "react-icons/ai";

const NavbarAskMenu: FC = (): ReactElement => {
  return (
    // <div className=" first-letter:flex items-center border-[1px] border-neutral-300 rounded-md bg-neutral-100 h-9 px-3 w-80 justify-between">
    //   <input
    //     type="text"
    //     placeholder="Cari chat"
    //     className="bg-neutral-100 w-full text-sm outline-none"
    //   />
    //   <AiOutlineSearch className="text-[20px]  text-neutral-900 hover:text-version3-500 transition-colors ease-in-out duration-300 cursor-pointer" />
    // </div>
    <div className="bg-neutral-100 w-9 h-9 flex items-center justify-center rounded-md shadow-sm">
      <BsQuestionCircle className="text-[20px] text-neutral-900 hover:text-version3-500 transition-colors ease-in-out duration-300 cursor-pointer" />
    </div>
  );
};

export default NavbarAskMenu;
