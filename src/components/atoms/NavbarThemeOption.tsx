import { FC, ReactElement } from "react";

import { TbSun } from "react-icons/tb";

const ThemeOption: FC = (): ReactElement => {
  return (
    <div className="bg-neutral-100 w-9 h-9 flex items-center justify-center rounded-md shadow-sm">
      <TbSun className="text-[20px]" />
    </div>
  );
};

export default ThemeOption;
