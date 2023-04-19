import { FC, Fragment, ReactElement } from "react";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import imgQuizIcon from "/public/assets/course/quiz-icon.svg";
import imgAssignmentIcon from "/public/assets/course/assignment-icon.svg";
import imgDiscussionIcon from "/public/assets/course/discussion-icon.svg";
import imgDoneIcon from "/public/assets/course/done-icon.svg";
import Link from "next/link";

const ContentSection: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="gap-[30px] select-none px-8 md:px-14 lg:px-16 mt-[25px]">
        <div className="flex flex-col">
          <button
            className={`px-[30px] py-[14px] flex justify-between items-center rounded-lg text-white cursor-pointer bg-[#053D38]`}
          >
            <p className="text-lg text-[#FFFF] font-medium">Pertemuan 1</p>

            <MdArrowDropDown className={`text-3xl relative text-[#FFFF]`} />
          </button>

          <div className={`w-[94%] mx-auto visible bg-[#fff]`}>
            <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
              <div className="flex gap-x-6">
                <Image
                  src={"/assets/course/module-icon.svg"}
                  className="w-auto"
                  alt=""
                  width={100}
                  height={100}
                />
                <Link
                  href="/studi-ku/course/modul"
                  className="text-base text-neutral-800 dark:text-neutral-400 hover:underline"
                >
                  Modul
                </Link>
              </div>
              <div className="">
                <Image src={imgDoneIcon} alt="" />
              </div>
            </div>
            <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
              <div className="flex gap-x-6">
                <Image src={imgQuizIcon} alt="" />
                <Link
                  href="/studi-ku/course/quiz"
                  className="text-base text-neutral-800 dark:text-neutral-400 hover:underline"
                >
                  Quiz
                </Link>
              </div>
              <div className="">
                <Image src={imgDoneIcon} alt="" />
              </div>
            </div>
            <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
              <div className="flex gap-x-6">
                <Image src={imgAssignmentIcon} alt="" />
                <Link
                  href="/studi-ku/course/penugasan-test"
                  className="text-base text-neutral-800 dark:text-neutral-400 hover:underline"
                >
                  Tugas
                </Link>
              </div>
              <div className="">
                <Image src={imgDoneIcon} alt="" />
              </div>
            </div>
            <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
              <div className="flex gap-x-6">
                <Image src={imgDiscussionIcon} alt="" />
                <Link
                  href="/studi-ku/course/diskusi"
                  className="text-base text-neutral-800 dark:text-neutral-400 hover:underline"
                >
                  Diskusi
                </Link>
              </div>
              <div className="">
                <Image src={imgDoneIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContentSection;