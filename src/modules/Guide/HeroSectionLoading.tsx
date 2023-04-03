import React, { ReactElement } from "react";

const HeroSectionLoading = (): ReactElement => {
  return (
    <div className="lg:grid lg:grid-cols-2 container lg:mx-auto mt-[30px] px-10 lg:px-0 mb-[50px] animate-pulse">
      <div className="col-span-1 ">
        <div className="title">
          <div className="  h-[74px] bg-neutral-200 rounded-md w-[300px] mb-[16px]" />
          <div className="bg-neutral-200 h-[26px] rounded-md" />
        </div>
        <div className="seacrh lg:w-[700px] h-[56px] w-full bg-neutral-200 dark:bg-[#232529] rounded-[8px] mt-[48px] flex items-center gap-4  ">
          <input className="w-full focus:outline-none bg-neutral-200" disabled />
        </div>
      </div>
      <div className="col-span-1 grid place-content-end lg:-mt-10">
        <div className={"bg-neutral-200 w-[355px] h-[355px] rounded-md"} />
      </div>
    </div>
  );
};

export default HeroSectionLoading;
