import { FC, ReactElement } from "react";

const RequestSceduleLoading: FC = (): ReactElement => {
  return (
    <section className="pt-[74px] bg-neutral-50/60  min-h-[100vh]">
      <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
        <div className="bg-neutral-200 animate-pulse rounded-md w-72 h-4"></div>
      </section>
      <section className="px-8 md:px-14 lg:px-16 py-0 md:py-2 lg:py-4 ">
        <div className=" bg-neutral-200 h-10 animate-pulse rounded-md w-80 font-bold text-xl md:text-2xl lg:text-3xl mb-6 text-neutral-900"></div>
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
          <aside>
            <figure className="h-[220px] bg-neutral-200 animate-pulse  rounded-md overflow-hidden mb-4  w-full"></figure>
            <section className="w-full flex gap-2 mb-2 md:items-center items-start">
              <div className=" h-8 w-full bg-neutral-200 rounded-md animate-pulse "></div>
            </section>
            <section className="h-4 w-full bg-neutral-200 rounded-md mb-1"></section>
            <section className="h-4 w-[80%] bg-neutral-200 rounded-md mb-1"></section>
            <section className="h-4 w-[60%] bg-neutral-200 rounded-md mb-3"></section>
            <section className="h-4 w-full bg-neutral-200 rounded-md mb-1"></section>
            <section className="h-4 w-[80%] bg-neutral-200 rounded-md mb-1"></section>
            <section className="h-4 w-[60%] bg-neutral-200 rounded-md mb-3"></section>
          </aside>
          <div>
            <header className="mb-8">
              <div className="text-xl h-7 bg-neutral-200 animate-pulse rounded-md mb-1 w-40"></div>
              <div className="text-sm h-4 bg-neutral-200 animate-pulse rounded-md w-32 mb-1"></div>
              <div className="text-sm h-4 bg-neutral-200 animate-pulse rounded-md w-32"> </div>
            </header>
            <main>
              <div className="text-sm font-bold mb-3 w-[50%] h-4 bg-neutral-200 animate-pulse rounded-md"></div>
            </main>
            <div className="w-full h-10  py-4 bg-neutral-200 animate-pulse rounded-md"></div>
          </div>
        </main>
      </section>
    </section>
  );
};

export default RequestSceduleLoading;
