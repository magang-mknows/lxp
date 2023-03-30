import Image from "next/image";
import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const DashbordResumeCard: FC<TCardContentProps> = ({ title, desc, srcImg }): ReactElement => {
  return (
    <div className='className="h-40 bg-neutral-100 hover:bg-neutral-200 cursor-pointer transition-colors ease-in-out duration-300 rounded-lg shadow-sm w-[144px] md:w-32 lg:w-36'>
      <div className="flex  auto p-4 flex-col cursor-pointer  justify-between gap-y-4 text-neutral-500 hover:text-neutral-600 ">
        <Image
          className="w-8 mb-1"
          src={srcImg as unknown as string}
          alt="resume"
          width={100}
          height={100}
        />
        <section>
          <h1 className=" text-4xl font-black text-neutral-500 mb-2">{desc}</h1>
          <h1 className="text-xs lg:text-sm text-neutral-500 ">{title}</h1>
        </section>
      </div>
    </div>
  );
};

export default DashbordResumeCard;
