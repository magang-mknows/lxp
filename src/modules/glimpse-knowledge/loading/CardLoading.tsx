import Image from "next/image";
import { FC, ReactElement } from "react";

const CardLoading: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-200 shadow-sm rounded-md overflow-hidden  min-h-[320px]">
      <figure className="w-full bg-neutral-300 h-40 overflow-hidden"></figure>
      <section className="py-2 px-4 mb-4">
        <header className="flex justify-between rounded-md animate-pulse items-center mb-4 h-6 bg-neutral-300"></header>
        <main>
          <div className="flex w-[100%] rounded-md animate-pulse  justify-between items-center mb-1 h-4 bg-neutral-300"></div>
          <div className="flex w-[80%]  rounded-md animate-pulse justify-between items-center mb-1 h-4 bg-neutral-300"></div>
          <div className="flex w-[70%] rounded-md animate-pulse  justify-between items-center mb-1 h-4 bg-neutral-300"></div>
        </main>
      </section>
    </section>
  );
};

export default CardLoading;
