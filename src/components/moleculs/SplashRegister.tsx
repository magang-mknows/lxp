"use client";

import { FC, ReactElement } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { resgisterSplashData } from "@/utils/const";

const SplashRegister: FC = (): ReactElement => {
  return (
    <div className="bg-neutral-50  px-6 md:px-14 pt-10 lg:px-16 rounded-md shadow-sm">
      <Link href={"/"} passHref className="logo">
        <Image src={"./assets/navbar/logo.svg"} alt={"logo"} height={100} width={130} />
      </Link>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={true}
        transitionTime={300}
        interval={3000}
        showStatus={false}
        swipeable={true}
        autoPlay={true}
        infiniteLoop={true}
        className="w-full pb-20 register-carousel"
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            <span
              className={`${
                isSelected ? "bg-version2-400 w-8" : "w-2 bg-neutral-300"
              } flex flex-row  h-2 rounded-full transition-all ease-in-out duration-300`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            ></span>
          );
        }}
      >
        {resgisterSplashData.map((item, index) => {
          return (
            <div key={index} className="mt-6 md:mt-10 lg:mt-16">
              <figure>
                <Image
                  src={`./assets/register/slider-${index + 1}.svg`}
                  alt={"logo"}
                  height={100}
                  width={130}
                  className="h-[400px]"
                />
              </figure>
              <h1 className="font-bold text-xl md:text-2xl text-neutral-900 mb-1">{item.title}</h1>
              <p className="text-xs md:text-sm text-neutral-700 px-0 md:px-4 lg:px-20">
                {item.description}
              </p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SplashRegister;
