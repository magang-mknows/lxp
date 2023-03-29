import { FC, ReactElement } from "react";
import { AiFillCheckCircle, AiFillClockCircle, AiOutlineCloudDownload } from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";
import { TCardContentProps } from "./types";

const DocumentStatusCard: FC<TCardContentProps> = ({ title, desc, subTitle }): ReactElement => {
  return (
    <section
      className={`${
        desc === "accepted"
          ? "border-[#3EB449]"
          : desc === "rejected"
          ? "border-warning-400"
          : "border-blue-600"
      } rounded-md mb-6 w-full border-l-8  shadow-md flex justify-between min-h-[110px] items-center px-8`}
    >
      <section>
        <h1 className="text-lg font-bold mb-1">{title}</h1>
        {desc === "rejected" && <p className="text-sm text-warning-500">{subTitle}</p>}
      </section>

      {desc == "rejected" && (
        <section className="flex w-20  justify-center items-center">
          <FaTimesCircle className="text-2xl text-warning-400" />
        </section>
      )}
      {desc == "processed" && (
        <section className="flex flex-col w-20  justify-center items-center">
          <AiFillClockCircle className="text-2xl text-secondary-blue-500" />
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-secondary-blue-600 text-sm">Estimasi</h1>
            <p className="text-xs">{subTitle}</p>
          </div>
        </section>
      )}
      {desc == "accepted" && (
        <section className="flex gap-2 w-20 justify-center items-center">
          <AiOutlineCloudDownload className="text-2xl text-blue-500" />
          <AiFillCheckCircle className="text-2xl text-[#3EB449]" />
        </section>
      )}
    </section>
  );
};

export default DocumentStatusCard;
