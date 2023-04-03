import { FC, ReactElement } from "react";
import { TButtonProps } from "./types";

const Button: FC<TButtonProps> = ({
  type,
  text,
  size,
  icon,
  iconPosition,
  className,
  disabled,
  onClick,
}): ReactElement => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`${
        type === "primary"
          ? " disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300"
          : "bg-neutral-50 text-version2-500 hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400 "
      } ${size === "tiny" && "text-xs py-1  w-20"} ${size === "small" && "text-sm py-2 w-24"} ${
        size === "medium" && "text-sm py-2 w-28"
      } ${size === "large" && "text-sm py-2 w-[200px]"}
        ${size === "extraLarge" && "text-sm py-3 w-[200px] md:w-[240px] lg:w-[300px]"} ${
        size === "full" && "w-full text-sm py-4"
      } ${
        iconPosition === "left" ? "flex-row-reverse" : "flex-row"
      } font-bold transition-colors ease-in-out relative z-30   rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 ${className}`}
      onClick={onClick}
    >
      <p>{text}</p>
      {icon && icon}
    </button>
  );
};

export default Button;
