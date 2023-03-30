import { FC, ReactElement } from "react";
import Button from "./Button";

const DashboardCalendarCard: FC = (): ReactElement => {
  return (
    <div className="border-l-4  cursor-pointer  transition-all ease-in-out duration-500 group py-3 hover:shadow-lg border-version3-500 px-4 rounded-md mb-4 flex justify-between items-center">
      <section>
        <p className="mb-1 text-neutral-800  text-xs md:text-sm">14:30 - 15:30 pm</p>
        <p className="font-bold   text-neutral-800 text-xs md:text-sm">
          Introduction to Japanese Culture
        </p>
        <p className="text-neutral-500 text-xs md:text-sm">Pertemuan 1</p>
      </section>
      <Button
        text="View"
        className="!text-neutral-400 !bg-neutral-200 !border-none hover:!bg-version3-500 hover:!text-neutral-50"
        size="medium"
      />
    </div>
  );
};

export default DashboardCalendarCard;
