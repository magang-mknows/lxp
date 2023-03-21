import { FC, ReactElement } from "react";
import { TButtonProps } from "./types";

const Button: FC<TButtonProps> = ({ type, text, size, icon }): ReactElement => {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-version3-500 text-neautral-100 hover:bg-version2-500"
          : "bg-neautral-50 text-version3-500 hover:bg-neautral-100 hover:text-version2-500 "
      } ${size}  rounded-md  ${
        size === "w-20" ? "text-xs py-1" : "text-sm py-2"
      } font-bold transition-colors ease-in-out duration-300  border-2 border-version3-500 flex items-center justify-center gap-2`}
    >
      <p>{text}</p>
      {icon && icon}
    </button>
  );
};

export default Button;
