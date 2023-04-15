import { FC, ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import Button from "./button";

const DiscussionSearch: FC = (): ReactElement => {
  return (
    <section className="flex flex-wrap items-center justify-between w-full mb-6 md:flex-nowrap gap-x-2 gap-y-3">
      <label
        htmlFor="searchDiscussion"
        className="flex  px-3 w-full gap-4 items-center rounded-md shadow-sm  bg-neutral-100 dark:bg-[#222529] dark:border-2 dark:border-neutral-700/80 text-neutral-500 h-[42px] lg:h-[50px]"
      >
        <AiOutlineSearch className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-200" />
        <input
          type="text"
          className="px-2 text-xs bg-neutral-100 w-full outline-none text-neutral-700 dark:text-neutral-100 md:text-sm"
          id="searchDiscussion"
          placeholder="Cari Topik Diskusi"
        />
      </label>
      <section className="w-full md:w-[200px] gap-10 lg:w-[200px] h-[42px] lg:h-[50px] flex justify-start md:justify-end">
        <Button
          text="Buat Diskusi"
          type="primary"
          size="full"
          icon={<IoMdAddCircleOutline className="text-xl text-neutral-50" />}
        />
      </section>
    </section>
  );
};

export default DiscussionSearch;
