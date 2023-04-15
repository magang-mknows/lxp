import { FC, Fragment, ReactElement, useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";

const Icon: FC = (): ReactElement => {
  const { theme } = useTheme();

  return (
    <Fragment>
      {theme === "dark" ? (
        <BsFillMoonStarsFill
          size={20}
          className="text-neutral-800  stroke-neutral-800 group-hover:text-version3-500 transition-colors ease-in-out duration-300"
        />
      ) : theme === "light" ? (
        <BiSun
          size={20}
          className="text-neutral-800  stroke-neutral-800 group-hover:text-version3-500 transition-colors ease-in-out duration-300"
        />
      ) : (
        <RiComputerLine
          size={20}
          className="text-neutral-500  stroke-neutral-800 group-hover:text-version3-500 transition-colors ease-in-out duration-300"
        />
      )}
    </Fragment>
  );
};
export default Icon;
