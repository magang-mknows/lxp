import { FC, ReactElement } from "react";
import { TButtonProps } from "./types";

const Button: FC<TButtonProps> = ({ type, text, size }): ReactElement => {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-version3-500 text-neautral-100 "
          : "bg-neautral-50 text-version3-500 "
      } ${size}  rounded-md  ${
        size === "w-20" ? "text-xs py-1" : "text-sm py-2"
      } font-bold  border-2 border-version3-500`}
    >
      {text}
    </button>
  );
};

export default Button;
