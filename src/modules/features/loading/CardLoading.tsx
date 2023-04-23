import { FC, ReactElement } from "react";

const CardLoading: FC = (): ReactElement => {
  return (
    <section>
      <div className="bg-neutral-200 rounded-md animate-pulse p-4 min-h-52">
        <div className="h-12 w-12 bg-neutral-300 rounded-md animate-pulse  mb-3"></div>
        <h1 className="font-bold bg-neutral-300 rounded-md animate-pulse h-4 w-32 mb-4"></h1>
        <div className="h-4 w-full  lg:w-52 bg-neutral-300 rounded-md animate-pulse mb-1"></div>
        <div className="h-4 w-full  lg:w-64 bg-neutral-300 rounded-md animate-pulse mb-1"></div>
        <div className="h-4  w-full lg:w-48 bg-neutral-300 rounded-md animate-pulse"></div>
      </div>
    </section>
  );
};

export default CardLoading;
