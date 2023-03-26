import { FC, ReactElement } from "react";

const FeturesLoading: FC = (): ReactElement => {
  return (
    <section className="pt-[74px] bg-neutral-100/70">
      <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
        <div className="bg-neutral-200 animate-pulse rounded-md w-44 h-4"></div>
      </section>
      <section className=" px-8 md:px-14 lg:px-16  py-2 md:py-4 lg:py-8 flex flex-col justify-center items-center ">
        <div className="max-w-[720px] flex flex-col items-center justify-center">
          <div className="h-9 w-64 bg-neutral-200 animate-pulse rounded-md mb-5"></div>
          <div className="h-4 w-96 bg-neutral-200 animate-pulse rounded-md mb-2"></div>
          <div className="h-4 w-80 bg-neutral-200 animate-pulse rounded-md "></div>
        </div>
      </section>
      <section className="mx-8 md:mx-14 lg:mx-72 xl:mx-80 px-4 py-3 flex items-center gap-2 bg-neutral-200 animate-pulse rounded-md mb-10 md:mb-14 lg:mb-16 xl:mb-20 relative">
        <div className=" py-3 w-full  rounded-md"></div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 md:px-14 lg:px-16 gap-6 md:gap-8 pb-20 md:pb-32 lg:pb-40">
        {[...Array(8)].map((item, index) => {
          return (
            <section key={index}>
              <div className="bg-neutral-200 rounded-md animate-pulse p-4 min-h-52">
                <div className="h-12 w-12 bg-neutral-300 rounded-md animate-pulse  mb-3"></div>
                <h1 className="font-bold bg-neutral-300 rounded-md animate-pulse h-4 w-32 mb-4"></h1>
                <div className="h-4 w-full  lg:w-52 bg-neutral-300 rounded-md animate-pulse mb-1"></div>
                <div className="h-4 w-full  lg:w-64 bg-neutral-300 rounded-md animate-pulse mb-1"></div>
                <div className="h-4  w-full lg:w-48 bg-neutral-300 rounded-md animate-pulse"></div>
              </div>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default FeturesLoading;
