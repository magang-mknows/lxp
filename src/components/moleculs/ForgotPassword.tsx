"use client";
import Button from "@/components/atoms/Button";
import DashedText from "@/components/atoms/DashedText";
import Form from "@/components/atoms/CommonForm";
import GoogleFoto from "../../../public/assets/Login/Google.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ControlledTextField from "../atoms/ControlledInput";
import ControlledCheckboxField from "../atoms/ControlledCheckbox";
import { FcGoogle } from "react-icons/fc";

const ForgotPassword: FC = (): ReactElement => {
  const validationSchema = z.object({
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form
      onSubmit={"/"}
      className="lg:w-[620px] sm:w-[620px] lg:h-[400px] sm:h-[200px] flex flex-col justify-center p-8"
    >
      <section className="flex flex-col w-full gap-y-2 mb-4">
        <h1 className="text-xl text-center font-black-900 font-[700]">Lupa kata sandi</h1>
        <p className="text-center text-sm ">
          Masukkan alamat email Anda yang terdaftar. Kami akan mengirimkan tautan <br />
          untuk mengatur ulang kata sandi Anda.
        </p>
      </section>

      <ControlledTextField
        control={control}
        type={"email"}
        name={"email"}
        placeholder={"Email"}
        className="h-[60px] rounded-[8px]"
        required
      />

      <div className="flex flex-col gap-y-1 my-4">
        <Button
          disabled={!isValid}
          className="!my-4 !w-full !disabled:bg-slate-400 !disabled:text-gray-300 !bg-[#053D38] !text-white !font-bold p-3 !text-1xl !rounded-md !border-0 !text-[#ffff] h-[56px] cursor-pointer"
          text={"Kirim"}
        />
      </div>
    </Form>
  );
};

export default ForgotPassword;
