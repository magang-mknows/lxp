import React, { ReactElement, useEffect, useState } from "react";

const SplashRegisterLoading = (): ReactElement => {
  return (
    <div className="bg-[#F5F5F5] w-full rounded-md  ">
      <div className="logo mt-[46px] mx-[70px]">
        <div className="w-[180px] h-[88px] bg-neutral-200 animate-pulse rounded-md"></div>
      </div>

      <div className="pt-[50px] grid place-content-center animate-pulse">
        <div className="image">
          <div className="bg-neutral-200 w-[450px] h-[450px] rounded-md"></div>
        </div>
        <div className="desc bg-neutral-200">
          <div className="h-[38px] bg-neutral-200"></div>
          <div className="text-base font-[400] text-center h-[24px] bg-neutral-200"></div>
        </div>
        <div className="flex justify-center gap-[15px] mt-[15px]">
          <div className="w-12 h-3 transition-all rounded-full bg-neutral-200"></div>
          <div className="w-3 h-3 transition-all rounded-full bg-neutral-200"></div>
          <div className="w-3 h-3 transition-all rounded-full bg-neutral-200"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashRegisterLoading;
