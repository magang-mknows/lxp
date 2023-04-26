import { FC, ReactElement } from "react";

const CardLoading: FC = (): ReactElement => {
  return (
    <div className="rounded-md mb-6 w-full  shadow-md flex justify-between min-h-[110px] items-center px-8 bg-neutral-300 animate-pulse"></div>
  );
};

export default CardLoading;
