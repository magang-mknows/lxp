import React from "react";

const DocumentServiceLoading = () => {
  return (
    <section className="pt-[74px] bg-neutral-50/60  min-h-[100vh]">
      <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
        <div className="bg-neutral-200 animate-pulse rounded-md w-80 h-4"></div>
      </section>
      <section className="px-8 md:px-14 lg:px-16 mb-12">
        <div className="w-full flex justify-center pt-3 mb-2">
          <div className="bg-neutral-200 animate-pulse rounded-md w-72 h-6"></div>
        </div>
        <div className="w-full flex justify-center">
          <div className="bg-neutral-200 animate-pulse rounded-md w-80 h-4"></div>
        </div>
      </section>
      <section className="px-8 md:px-14 lg:px-32 justify-center flex-wrap flex gap-x-16 gap-y-12 pb-40">
        {[...Array(8)].map((item, index) => {
          return (
            <div
              key={index}
              className="bg-neutral-200 animate-pulse rounded-md shadow-md px-10 py-10 w-full md:w-[360px] lg:w-[320px] h-[310px]"
            >
              <div className="h-[120px] bg-neutral-300 rounded-md animate-pulse mb-7"></div>
              <div className="bg-neutral-300 animate-pulse mb-16 rounded-md w-40 h-4"></div>
              <section className="flex justify-between items-center">
                <div className="w-full flex justify-center">
                  <div className="bg-neutral-300 animate-pulse rounded-md w-80 h-4"></div>
                </div>
              </section>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default DocumentServiceLoading;
