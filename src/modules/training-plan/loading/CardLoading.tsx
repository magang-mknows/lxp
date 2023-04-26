import { FC, ReactElement } from "react";

const CardLoading: FC = (): ReactElement => {
  return (
    <div className="bg-neutral-200 rounded-md animate-pulse w-full  overflow-hidden hover:shadow-lg transition-all ease-in-out duration-150 shadow-sm min-h-[320px]"></div>
  );
};

export default CardLoading;
