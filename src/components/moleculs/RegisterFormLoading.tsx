"use client";
import Form from "@/components/atoms/common-form";
import { FC, ReactElement } from "react";

const RegisterFormLoading: FC = (): ReactElement => {
  return (
    <div className="flex flex-col  px-8 md:px-14 lg:px-16 pt-10">
      <section className="flex flex-col w-full gap-y-2 mb-4">
        <h1 className=" bg-neutral-200 h-8 w-[40%] rounded-md animate-pulse"></h1>
        <p className="mb-4 h-6 w-full bg-neutral-200 rounded-md animate-pulse"></p>
      </section>
      {[...Array(4)].map((item, index) => {
        return (
          <div key={index} className="h-[56px]  bg-neutral-200 rounded-md animate-pulse mb-4"></div>
        );
      })}
      <div className="h-4 bg-neutral-200 w-full rounded-md animate-pulse mt-4 mb-14"></div>
      <div className="h-12 w-full bg-neutral-200 animate-pulse rounded-md mb-6"></div>
      <div className="h-2 w-full bg-neutral-200 animate-pulse rounded-md mb-6"></div>
      <div className="h-12 w-full bg-neutral-200 animate-pulse rounded-md mb-8"></div>
      <div className="h-2 w-full bg-neutral-200 animate-pulse rounded-md "></div>
    </div>
  );
};

export default RegisterFormLoading;
