import { FC, ReactElement } from "react";

import { BsQuestionCircle } from "react-icons/bs";

const NavbarAskMenu: FC = (): ReactElement => {
  return (
    <div className="bg-neutral-100 w-9 h-9 flex items-center justify-center rounded-md shadow-sm">
      <BsQuestionCircle className="text-[20px] text-neutral-900 hover:text-version3-500 transition-colors ease-in-out duration-300 cursor-pointer" />
    </div>
  );
};

export default NavbarAskMenu;
