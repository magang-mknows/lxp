import React, { ReactElement } from "react";

const SplashRegisterLoading = (): ReactElement => {
  return (
    <div className="bg-neutral-50  px-8 md:px-14 pt-10 lg:px-16 rounded-md shadow-sm">
      <div className="logo h-[40px] rounded-md w-[130px] bg-neutral-200 animate-pulse"></div>
      <div className="h-[400px] bg-neutral-200 animate-pulse rounded-md mt-6 md:mt-10 lg:mt-16 mb-4"></div>
      <div className="flex justify-center flex-col items-center">
        <div className="h-4 md:h-6 bg-neutral-200 animate-pulse rounded-md w-[80%] mb-1"></div>
        <div className="h-4 md:h-6 bg-neutral-200 animate-pulse rounded-md w-[60%]  mb-1"></div>
        <div className="h-4 md:h-6 bg-neutral-200 animate-pulse rounded-md w-[40%] "></div>
      </div>
    </div>
  );
};

export default SplashRegisterLoading;
