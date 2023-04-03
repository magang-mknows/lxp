"use client";
import Image from "next/image";
import React, { ReactElement, useEffect, useState } from "react";
import Slider1 from "../../../public/assets/register/slider-1.svg";
import Slider2 from "../../../public/assets/register/slider-2.svg";
import Slider3 from "../../../public/assets/register/slider-3.svg";
import Logo from "../../../public/assets/navbar/logo.svg";

const SplashRegister = (): ReactElement => {
  const [slider, setslider] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setslider(slider + 1);
    }, 5000);
    return () => {
      if (slider === 3) {
        setslider(1);
      }
    };
  }, [slider]);
  return (
    <div className="bg-[#F5F5F5] w-full  ">
      <div className="logo lg:mt-[46px] lg:mx-[70px] p-10 lg:p-0">
        <Image src={Logo} alt={"logo"} />
      </div>

      <div className="lg:pt-[50px] grid place-content-center p-10">
        <div className="image grid place-content-center">
          {slider == 1 ? (
            <Image
              src={Slider1}
              alt={"Slider"}
              className={" transition-all"}
              width={400}
              height={400}
            />
          ) : slider == 2 ? (
            <Image
              src={Slider2}
              alt={"Slider"}
              className={" transition-all"}
              width={400}
              height={400}
            />
          ) : slider == 3 ? (
            <Image
              src={Slider3}
              alt={"Slider"}
              className={" transition-all"}
              width={400}
              height={400}
            />
          ) : (
            ""
          )}
        </div>
        <div className="desc text-[#000]">
          {slider == 1 ? (
            <>
              <h1 className="text-[28px] font-[700] text-center">Selamat Datang di LMS MKnows</h1>
              <p className="text-base font-[400] text-center h-10">
                Platform pelatihan pertama di Indonesia, latihan mudah <br />
                dengan Learning Experience Platform bisa diakses <br />
                siapapun khususnya kaum marginal
              </p>
            </>
          ) : slider == 2 ? (
            <>
              <h1 className="text-[28px] font-[700] text-center">Solusi Pelatihan Berkualitas</h1>
              <p className="text-base font-[400] text-center  h-10">
                Kamu bisa raih jenjang pendidikan yang cemerlang tanpa <br />
                perlu mengeluarkan biaya sedikitpun
              </p>
            </>
          ) : slider == 3 ? (
            <>
              <h1 className="text-[28px] font-[700] text-center  ">
                Terdapat 16 fitur yang membantu kamu
              </h1>
              <p className="text-base font-[400] text-center h-10">
                Dibimbing oleh mentor yang profesional, Dukungan <br />
                untuk karir masa depan
              </p>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-center gap-[15px] mt-[50px]">
          <button onClick={() => (slider != 1 ? setslider(1) : "")}>
            <div
              className={`${
                slider == 1 ? "w-12 bg-version3-500  " : " w-3 "
              }h-3  transition-all rounded-full bg-neutral-300`}
            ></div>
          </button>
          <button onClick={() => (slider != 2 ? setslider(2) : "")}>
            <div
              className={`${
                slider == 2 ? "w-12 bg-version3-500  " : " w-3 "
              }h-3  transition-all rounded-full bg-neutral-300`}
            ></div>
          </button>
          <button onClick={() => (slider != 3 ? setslider(3) : "")}>
            <div
              className={`${
                slider == 3 ? "w-12 bg-version3-500  " : " w-3 "
              }h-3  transition-all rounded-full bg-neutral-300`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashRegister;
