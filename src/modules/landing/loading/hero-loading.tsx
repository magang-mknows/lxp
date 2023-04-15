import { FC, ReactElement } from "react";

const HeroLoading: FC = (): ReactElement => {
  return (
    <div className="flex flex-col items-center pt-16 md:pt-20 lg:pt-24 relative overflow-hidden bg-no-repeat bg-cover bg-neutral-100">
      <div className="px-2 md:px-20 flex flex-col justify-center items-center w-full lg:px-32 xl:px-[250px] mb-6 md:mb-8 lg:mb-10">
        <div className="h-8 lg:h-16 w-full bg-neutral-200 rounded-md animate-pulse  mb-3"></div>
        <div className="h-8 lg:h-16 w-[80%] bg-neutral-200 rounded-md animate-pulse  mb-3"></div>
        <div className="h-8 lg:h-16 w-[60%] md:hidden xl:inline bg-neutral-200 rounded-md animate-pulse  mb-5"></div>
      </div>
      <div className="px-8 w-full md:px-12 flex items-center flex-col lg:px-16 xl:px-[280px] text-center mb-8 md:mb-8 lg:mb-10">
        <div className="bg-neutral-200 rounded-md animate-pulse  w-full h-4 mb-3"></div>
        <div className="bg-neutral-200 rounded-md animate-pulse  w-96 h-4"></div>
      </div>
      <div className="bg-neutral-200 rounded-md animate-pulse  w-28 h-10"></div>
      <div className="mt-10 md:mt-12 lg:mt-20 relative bottom-0 ">
        <div className="w-[300px] md:w-[650px] lg:w-[800px] xl:w-[1100px] bg-neutral-200 rounded-md animate-pulse  h-[120px] md:h-[260px] lg:h-[420px]"></div>
      </div>
    </div>
  );
};

export default HeroLoading;
