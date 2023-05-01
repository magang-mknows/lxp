import Button from "@/components/atoms/Button";
import DashedText from "@/components/atoms/DashedText";
import Form from "@/components/atoms/CommonForm";
// import { useLogin } from "@/hooks/Auth/useLogin";
// import { handleError } from "@/utilities/helper";
import GoogleFoto from "../../../public/assets/Login/Google.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ControlledTextField from "../atoms/ControlledInput";
import ControlledCheckboxField from "../atoms/ControlledCheckbox";
import { FcGoogle } from "react-icons/fc";
import { useForgotPopup } from "@/modules/auth/hooks/ForgotPassword/usePopupForgot";
import { useLoginPopup } from "@/modules/auth/hooks/Login/usePopupLogin";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const LoginForm: FC = (): ReactElement => {
  const { setForgotPopup } = useForgotPopup();
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState<string | undefined>(undefined);
  const { setLoginPopup } = useLoginPopup();
  const validationSchema = z.object({
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    password: z.string().min(1, { message: "Password harus diisi" }),
    remember: z.boolean(),
  });
  const openForgot = () => {
    setLoginPopup(false);
    setForgotPopup(true);
  };
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
      remember: false,
    },
  });
  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await signIn("login", {
        email: data.email,
        password: data.password,
        // redirect: false,
      });
      if (response?.ok) {
        router.push("/");
      } else {
        setError(response?.error);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  });

  return (
    <Form onSubmit={onSubmit} className=" flex flex-col px-20 py-12">
      <section className="flex flex-col w-full gap-y-1 mb-6 mt-10">
        <h1 className="text-center font-bold text-4xl">Masuk</h1>
        <p className="text-center text-sm">
          Silahkan masuk menggunakan email dan kata sandi yang terdaftar{" "}
        </p>
      </section>
      <section className="flex flex-col gap-4 mb-4">
        <ControlledTextField
          control={control}
          type={"email"}
          name={"email"}
          placeholder={"email"}
          required
          className="!h-[56px] !rounded-[8px] !border-2 !border-[#A3A3A3]"
        />
        <ControlledTextField
          control={control}
          type={"password"}
          name={"password"}
          placeholder={"***"}
          required
          className="!h-[56px] !rounded-[8px] !border-2 !border-[#A3A3A3]"
        />
      </section>

      <div className="flex justify-between items-center w-full pt-1 mb-6">
        <ControlledCheckboxField
          control={control}
          name={"remember"}
          required={false}
          label={"Remember Me"}
        />
        <a
          className="text-version2-400 font-bold text-xs md:text-sm  hover:underline cursor-pointer"
          onClick={() => openForgot()}
        >
          Lupa Password akun-mu?
        </a>
      </div>

      <div className="flex flex-col gap-y-1 ">
        <Button
          disabled={!isValid}
          type="primary"
          text="Masuk"
          className="!bg-version2-400 disabled:!bg-version2-400/60 !border-none"
          size="full"
        />

        <DashedText />

        <Button
          icon={<FcGoogle className="text-xl" />}
          iconPosition="left"
          disabled={!isValid}
          type="secondary"
          text="Masuk dengan google"
          className="bg-neutral-50 !border-neutral-500 border-[1px] !text-neutral-500 "
          size="full"
        />
        <div className="flex justify-center pt-2">
          <h1 className="text-xs md:text-sm">
            Belum punya akun ?{" "}
            <span className="text-version2-400 font-bold  ">
              <Link href={"/"}>Daftar disini</Link>
            </span>
          </h1>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
