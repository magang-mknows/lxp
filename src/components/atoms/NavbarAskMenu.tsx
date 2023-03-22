import { FC, ReactElement } from "react";

import { BsQuestionCircle } from "react-icons/bs";

const NavbarAskMenu: FC = (): ReactElement => {
  return (
    <div className="bg-neutral-100 w-9 h-9 flex items-center justify-center rounded-md shadow-sm">
      <BsQuestionCircle className="text-[20px]" />
    </div>
  );
};

export default NavbarAskMenu;
