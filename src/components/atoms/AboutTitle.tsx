import { FC, ReactElement } from "react";

const AboutTitle: FC = (): ReactElement => {
  return (
    <div className=" lg:col-span-2 col-span-3 flex items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-100 font-bold  leading-[36px] md:leading-[52px] lg:pr-18 xl:pr-32 lg:leading-[56px] xl:leading-[72px] ">
        M-Knows Consulting Konsultan <span className="text-version3-500">Terbaik</span> Untuk Anda
      </h1>
    </div>
  );
};

export default AboutTitle;
