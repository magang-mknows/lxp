import { FC, ReactElement } from "react";
import { DashedTextProps } from "./types";

const DashedText: FC<DashedTextProps> = ({ text = "Atau" }): ReactElement => {
  return (
    <div className="inline-flex items-center justify-center w-full">
      <hr className="w-full h-px my-8 bg-[#D9D9D9] border-0 dark:bg-gray-700" />
      <span className="absolute px-3 font-medium text-[#D9D9D9] bg-[#fff] dark:text-white dark:bg-gray-800">
        {text}
      </span>
    </div>
  );
};

export default DashedText;
