import { FC, ReactElement } from "react";

const CardLoading: FC = (): ReactElement => {
  return (
    <section className="grid gap-10 grid-cols-1 md:grid-cols-2">
      <div className="bg-neutral-200 animate-pulse rounded-md w-full h-60 md:h-80 px-4 pt-4 pb-6">
        <div className="bg-neutral-300 animate-pulse rounded-md w-full min-h-[210px] mb-4"></div>
        <div className="h-5 w-full mb-2 bg-neutral-300 rounded-md animate-pulse"></div>
        <div className="h-5 w-16 bg-neutral-300 rounded-md animate-pulse mb-4"></div>
      </div>
      <div className="bg-neutral-200 animate-pulse rounded-md w-full h-60 md:h-80 px-4 pt-4 pb-6">
        <div className="bg-neutral-300 animate-pulse rounded-md w-full min-h-[210px] mb-4"></div>
        <div className="h-5 w-full mb-2 bg-neutral-300 rounded-md animate-pulse"></div>
        <div className="h-5 w-16 bg-neutral-300 rounded-md animate-pulse mb-4"></div>
      </div>
      <div className="bg-neutral-200 animate-pulse rounded-md w-full h-60 md:h-80 px-4 pt-4 pb-6">
        <div className="bg-neutral-300 animate-pulse rounded-md w-full min-h-[210px] mb-4"></div>
        <div className="h-5 w-full mb-2 bg-neutral-300 rounded-md animate-pulse"></div>
        <div className="h-5 w-16 bg-neutral-300 rounded-md animate-pulse mb-4"></div>
      </div>
    </section>
  );
};

export default CardLoading;
