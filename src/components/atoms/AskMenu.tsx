import { FC, ReactElement } from "react";

import { BsQuestionCircle } from "react-icons/bs";

const AskMenu: FC = (): ReactElement => {
  return (
    <div className="bg-neautral-100 w-9 h-9 flex items-center justify-center rounded-md shadow-sm">
      <BsQuestionCircle className="text-[20px]" />
    </div>
  );
};

export default AskMenu;
