import React from "react";

const DocumentStatusLoading = () => {
  return (
    <section className="pt-[74px] bg-neutral-50/60  min-h-[100vh]">
      <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
        <div className="bg-neutral-200 animate-pulse rounded-md w-64 h-4"></div>
      </section>
      <section className="py-8 relative px-8 md:px-14 lg:px-14 flex flex-col justify-center items-center">
        <div className="w-full flex justify-center mb-2">
          <div className="text-2xl text-neutral-900 font-bold h-6 w-60 rounded-md bg-neutral-200 animate-pulse"></div>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-2xl text-neutral-900 font-bold h-4 w-96 rounded-md bg-neutral-200 animate-pulse"></div>
        </div>
      </section>
      <nav className="mx-8 md:mx-16 lg:mx-40 mt-10 pb-10 shadow-sm min-h-[80vh] bg-neutral-200 rounded-md animate-pulse px-8 md:px-14 lg:px-16 pt-24">
        <div className="rounded-md mb-6 w-full  shadow-md flex justify-between min-h-[110px] items-center px-8 bg-neutral-300 animate-pulse"></div>
        <div className="rounded-md mb-6 w-full  shadow-md flex justify-between min-h-[110px] items-center px-8 bg-neutral-300 animate-pulse"></div>
        <div className="rounded-md mb-6 w-full  shadow-md flex justify-between min-h-[110px] items-center px-8 bg-neutral-300 animate-pulse"></div>
      </nav>
    </section>
  );
};

export default DocumentStatusLoading;
