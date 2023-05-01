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
import CheckboxField from "../atoms/CheckboxField";
import { useRegister } from "@/modules/auth/resgiter/hook";
import { useRouter } from "next/router";
import { ImSpinner5 } from "react-icons/im";

const RegisterForm: FC = (): ReactElement => {
  const validationSchema = z
    .object({
      full_name: z.string().min(1, { message: "Nama Lengkap harus diisi" }),
      email: z.string().min(1, { message: "Email harus diisi" }).email({
        message: "Email harus valid",
      }),
      password: z.string().min(1, { message: "Password harus diisi" }),
      password_confirmation: z.string().min(1, { message: "Password harus diisi" }),
    })
    .refine((data) => data.password === data.password_confirmation, {
      message: "Password tidak sesuai",
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
      full_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });
  const { mutate, isLoading } = useRegister();

  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => router.push("/"),
      onError: (e) => {
        console.log(e.response?.data.message);
      },
    });
  });

  return (
    <Form onSubmit={onSubmit} className="flex flex-col justify-center px-8 md:px-14 lg:px-16 pt-10">
      <section className="flex flex-col w-full mb-4">
        <h1 className="text-4xl font-bold text-left text-neutral-700 mb-1">Daftar Akun</h1>
        <p className="text-sm text-neutral-900 mb-4">
          Silahkan isi data berikut untuk melakukan pendaftaran
        </p>
      </section>
      <div className="flex flex-col gap-4">
        <ControlledTextField
          control={control}
          type={"text"}
          name={"full_name"}
          placeholder={"Nama Lengkap"}
          required
          className="!h-[56px] !rounded-[8px] !border-2 !border-[#A3A3A3] "
        />
        <ControlledTextField
          control={control}
          type={"email"}
          name={"email"}
          placeholder={"Email"}
          required
          className="!h-[56px] !rounded-[8px] !border-2 !border-[#A3A3A3] "
        />
        <ControlledTextField
          control={control}
          type={"password"}
          name={"password"}
          placeholder={"Kata Sandi"}
          className="!h-[56px] !rounded-[8px] !border-2 !border-[#A3A3A3] "
          required
        />
        <ControlledTextField
          control={control}
          type={"password"}
          name={"password_confirmation"}
          placeholder={"Konfirmasi Kata Sandi"}
          className="!h-[56px] !rounded-[8px] !border-2 !border-[#A3A3A3]"
          required
        />
      </div>

      <div className="flex justify-between w-full pt-2">
        <CheckboxField
          name="agrement"
          control={control}
          label="Saya setuju dengan syarat & ketentuan"
          className=" !bg-primary-200"
        />
      </div>
      <div className="flex flex-col my-6 md:py-8">
        <Button
          disabled={!isValid}
          text="Daftar"
          type="primary"
          size="full"
          className="!bg-version2-400 !border-none"
          icon={isLoading ? <ImSpinner5 className="animate-spin duration-200 delay-150" /> : null}
        />
        <DashedText />
        <Button
          icon={<FcGoogle className="text-xl mr-1" />}
          iconPosition="left"
          text="Daftar dengan Google"
          type="secondary"
          size="full"
          className="!border-neutral-600/70 !text-neutral-600/70 "
        />
        <div className="flex justify-center text-neutral-900 text-xs md:text-sm pt-4">
          <h1>
            Sudah punya akun ?
            <span className="text-version2-400 hover:underline text-xs md:text-sm font-bold">
              <Link href={"/"}> Masuk disini</Link>
            </span>
          </h1>
        </div>
      </div>
    </Form>
  );
};

export default RegisterForm;
