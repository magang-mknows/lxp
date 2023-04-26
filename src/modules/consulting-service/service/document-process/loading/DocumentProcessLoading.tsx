import React from "react";
import DocumentFormLoading from "./DocumentFormLoading";

const DocumentProcessLoading = () => {
  return (
    <section className=" bg-neutral-50/60  min-h-[100vh]">
      <section className="py-8 relative px-8 md:px-14 lg:px-14 flex flex-col justify-center items-center">
        <div className="w-full flex justify-center mb-2">
          <div className="text-2xl text-neutral-900 font-bold h-6 w-60 rounded-md bg-neutral-200 animate-pulse"></div>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-2xl text-neutral-900 font-bold h-4 w-96 rounded-md bg-neutral-200 animate-pulse"></div>
        </div>
      </section>
      <DocumentFormLoading />
    </section>
  );
};

export default DocumentProcessLoading;
