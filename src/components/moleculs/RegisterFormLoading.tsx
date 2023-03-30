"use client";
import Button from "@/components/atoms/Button";
import DashedText from "@/components/atoms/DashedText";
import Form from "@/components/atoms/CommonForm";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ControlledTextField from "../atoms/ControlledInput";
import { FcGoogle } from "react-icons/fc";
import TextField from "../atoms/TextField";

const RegisterFormLoading: FC = (): ReactElement => {
  return (
    <Form className="lg:w-full sm:w-[620px]flex flex-col justify-center px-[100px] py-[50px] animate-pulse">
      <section className="flex flex-col w-full gap-y-2 mb-4">
        <h1 className=" bg-neutral-200 h-[50px] w-[250px] rounded-md"></h1>
        <p className="mb-[30px] h-[24px] w-[400px] bg-neutral-200 rounded-md"></p>
      </section>
      <TextField
        control={""}
        type={""}
        name={""}
        placeholder={""}
        disabled
        required
        className="!h-[60px] !rounded-[8px] !border-0 !bg-neutral-200 "
      />
      <TextField
        control={""}
        type={""}
        name={""}
        placeholder={""}
        disabled
        required
        className="!h-[60px] !rounded-[8px] !border-0 !bg-neutral-200 "
      />
      <TextField
        control={""}
        type={""}
        name={""}
        placeholder={""}
        disabled
        required
        className="!h-[60px] !rounded-[8px] !border-0 !bg-neutral-200 "
      />
      <TextField
        control={""}
        type={""}
        name={""}
        placeholder={""}
        disabled
        required
        className="!h-[60px] !rounded-[8px] !border-0 !bg-neutral-200 "
      />

      <div className="flex flex-col gap-y-1 my-4">
        <div className="!my-4 !w-full !disabled:bg-slate-400 !disabled:text-gray-300 !bg-neutral-200 !text-white !font-bold p-3 !text-1xl !rounded-md !border-0" />

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-8 bg-neutral-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium bg-neutral-200 dark:text-white dark:bg-gray-800"></span>
        </div>

        <div className="!my-4 !w-full  !rounded-md !bg-neutral-200 !border-0 !text-[#A3A3A3] h-[56px] " />
        <div className="flex justify-center h-[27px] bg-neutral-200 rounded-md"></div>
      </div>
    </Form>
  );
};

export default RegisterFormLoading;
