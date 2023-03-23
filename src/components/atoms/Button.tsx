import { FC, ReactElement } from "react";
import { TButtonProps } from "./types";

const Button: FC<TButtonProps> = ({ type, text, size, icon }): ReactElement => {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-version2-500 text-neutral-100 hover:bg-version3-500"
          : "bg-neutral-50 text-version2-500 hover:bg-neutral-100 hover:text-version2-500 "
      } ${size === "tiny" && "text-xs py-1  w-20"} ${size === "small" && "text-sm py-2 w-24"} ${
        size === "medium" && "text-sm py-2 w-28"
      } ${size === "large" && "text-sm py-2 w-[200px]"}
        ${
          size === "extraLarge" && "text-sm py-3 w-[200px] md:w-[240px] lg:w-[300px]"
        } font-bold transition-colors ease-in-out rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2`}
    >
      <p>{text}</p>
      {icon && icon}
    </button>
  );
};

export default Button;
