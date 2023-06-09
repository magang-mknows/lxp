import { FC, ReactElement } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { DetailCardProps } from "./type";

const DetailCard: FC<DetailCardProps> = ({ type, value }): ReactElement => {
  return (
    <section
      className={`${
        type === "trueAnswer"
          ? " bg-[#E3FBDA] dark:bg-secondary-green-500 hover:bg-secondary-green-200"
          : type === "falseAnswer"
          ? "bg-[#FEDBD7] dark:bg-secondary-red-500 hover:bg-secondary-red-200"
          : type === "timeFinished"
          ? "bg-[#FEF6D0] dark:bg-secondary-yellow-500 hover:bg-secondary-yellow-200"
          : type === "totalQuestions" && "bg-neutral-200 dark:bg-neutral-500 hover:bg-neutral-300"
      } flex gap-5 lg:gap-4 min-h-[80px] md:min-h-[100px] lg:min-h-[80px] items-center w-62 lg:w-62 xl:w-full px-4 rounded-md shadow-sm transition-colors ease-in duration-300 cursor-pointer`}
    >
      {type === "trueAnswer" && (
        <BsCheckCircleFill className="text-[#3EB449] dark:text-green-50 mt-1 text-4xl" />
      )}
      {type === "falseAnswer" && (
        <FaTimesCircle className="text-[#ED3768] dark:text-green-50 mt-1 text-4xl" />
      )}
      {type === "timeFinished" && (
        <MdAccessTimeFilled className=" text-[#FAB317] dark:text-green-50 mt-1 text-4xl" />
      )}
      {type === "totalQuestions" && (
        <AiFillInfoCircle className="text-neutral-500 dark:text-green-50 mt-1 text-4xl" />
      )}
      <div className="text-neutral-900 dark:text-white">
        <h1 className="font-bold text-sm lg:text-base">{value}</h1>
        <h1 className="text-sm lg:text-base">
          {type === "trueAnswer" && "Jawaban Benar"}
          {type === "falseAnswer" && "Jawaban Salah"}
          {type === "timeFinished" && "Waktu selesai"}
          {type === "totalQuestions" && "Total Soal"}
        </h1>
      </div>
    </section>
  );
};

export default DetailCard;
