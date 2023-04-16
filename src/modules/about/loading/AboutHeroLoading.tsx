import { FC, ReactElement } from "react";

const AboutHeroLoading: FC = (): ReactElement => {
  return (
    <div className="bg-neutral-200 animate-pulse bg-no-repeat px-8 md:px-14 lg:px-16 bg-center bg-cover  min-h-[80vh] grid grid-cols-1 lg:grid-cols-3 pt-20 lg:pt-4 shadow-md ">
      <div className=" lg:col-span-2 col-span-3 flex flex-col justify-center mt-2">
        <div className="bg-neutral-300 rounded-md animate-pulse h-16 mb-2 w-[800px]"></div>
        <div className="bg-neutral-300 rounded-md animate-pulse h-16 mb-2 w-[500px]"></div>
        <div className="bg-neutral-300 rounded-md animate-pulse h-16 mb-2 w-[400px]"></div>
      </div>
      <div className="bg-neutral-300  lg:pt-16 relative top-14 lg:top-[36%] py-14 px-5 md:px-6 lg:px-8 text-sm font-medium h-[460px]  "></div>
    </div>
  );
};

export default AboutHeroLoading;
