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

const RegisterForm: FC = (): ReactElement => {
  const validationSchema = z
    .object({
      fullName: z.string().min(1, { message: "Nama Lengkap harus diisi" }),
      email: z.string().min(1, { message: "Email harus diisi" }).email({
        message: "Email harus valid",
      }),
      password: z.string().min(1, { message: "Password harus diisi" }),
      confirmPassword: z.string().min(1, { message: "Password harus diisi" }),
    })
    .refine((data) => data.password === data.confirmPassword, { message: "Password tidak sesuai" });

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
      password: "",
    },
  });

  return (
    <Form
      onSubmit={"/"}
      className="lg:w-full sm:w-[620px]flex flex-col justify-center lg:px-[100px] px-10 py-[50px]"
    >
      <section className="flex flex-col w-full gap-y-2 mb-4">
        <h1 className="md:text-5xl text-[36px] text-left text-[#737373] font-[700]">Daftar Akun</h1>
        <p className="text-left text-[16px] md:text-base font-[400] mb-[30px]">
          Silahkan isi data berikut untuk melakukan pendaftaran
        </p>
      </section>
      <div className="flex flex-col gap-4">
        <ControlledTextField
          control={control}
          type={"text"}
          name={"fullName"}
          placeholder={"Nama Lengkap"}
          required
          className="!h-[60px] !rounded-[8px] !border-2 !border-[#A3A3A3] "
        />
        <ControlledTextField
          control={control}
          type={"email"}
          name={"email"}
          placeholder={"Email"}
          required
          className="!h-[60px] !rounded-[8px] !border-2 !border-[#A3A3A3] "
        />
        <ControlledTextField
          control={control}
          type={"password"}
          name={"password"}
          placeholder={"Kata Sandi"}
          className="!h-[60px] !rounded-[8px] !border-2 !border-[#A3A3A3] "
          required
        />
        <ControlledTextField
          control={control}
          type={"password"}
          name={"confirmPassword"}
          placeholder={"Konfirmasi Kata Sandi"}
          className="!h-[60px] !rounded-[8px] !border-2 !border-[#A3A3A3]"
          required
        />
      </div>

      <div className="flex justify-between w-full">
        <Link
          className="text-[#053D38] lg:text-[16px] text-[12px] font-[600]"
          href={"/auth/forgot"}
        >
          Lupa Password akun-mu?
        </Link>
      </div>
      <div className="flex flex-col gap-y-1 my-4">
        <Button
          disabled={!isValid}
          className="!my-4 !w-full !disabled:bg-slate-400 !disabled:text-gray-300 !bg-[#053D38] !text-white !font-bold p-3 !text-1xl !rounded-md !border-0 !text-[#ffff] h-[56px] cursor-pointer"
          text={"Daftar"}
        />

        <DashedText />

        <Button
          className="!my-4 !w-full  !border-[#000] !font-bold p-3 !text-1xl !rounded-md !bg-[#FAFAFA] !border-1 !text-[#A3A3A3] h-[56px] cursor-pointer"
          text="Daftar Dengan Google"
          type={"primary"}
          icon={<FcGoogle width={100} h-={100} />}
        />
        <div className="flex justify-center">
          <h1 className="text-black">
            Sudah punya akun ?{" "}
            <span className="text-[#053D38] text-[18px] font-[600]">
              {" "}
              <Link href={"/"}>Masuk disini</Link>{" "}
            </span>
          </h1>
        </div>
      </div>
    </Form>
  );
};

export default RegisterForm;
