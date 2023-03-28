"use client";

import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ControlledTextField from "../atoms/ControlledInput";
import Form from "../atoms/CommonForm";
import Button from "../atoms/Button";

const DocumentProcessForm: FC = (): ReactElement => {
  const validationSchema = z.object({
    name: z.string().min(1, { message: "Masukan Nama Anda" }),
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    nip: z.string().min(1, { message: "Masukan NIP Anda" }),
    message: z.string().min(1, { message: "Masukan pesan Anda" }),
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
      name: "",
      email: "",
      nip: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    try {
      console.log(data);
    } catch (err) {
      throw err;
    }
  });

  return (
    <div className="mx-8 md:mx-16 lg:mx-40 my-10 bg-neutral-50 rounded-md shadow-sm min-h-[80vh]">
      <form className="px-8 md:px-14 lg:px-16 py-8 md:py-14 lg:py-16 w-full ">
        <section className="flex gap-2 lg:gap-20 flex-col lg:flex-row justify-between items-start mb-1">
          <label
            htmlFor="name"
            className="w-[100px] mt-4 text-neutral-800 font-bold text-lg flex items-center "
          >
            Nama <span className="text-warning-500 px-2">*</span>
          </label>
          <ControlledTextField
            hasLabel={false}
            className="w-[320px] lg:w-[720px] py-3"
            control={control}
            type={"text"}
            name={"name"}
            placeholder={"Masukan Nama"}
          />
        </section>
        <section className="flex gap-20 justify-between items-start mb-1">
          <label
            htmlFor="nip"
            className="w-[100px] mt-4 text-neutral-800 font-bold text-lg flex items-center "
          >
            NIP <span className="text-warning-500 px-2">*</span>
          </label>
          <ControlledTextField
            hasLabel={false}
            className="w-[720px] py-3"
            control={control}
            type={"text"}
            name={"nip"}
            placeholder={"Masukan NIP"}
          />
        </section>
        <section className="flex gap-20 justify-between items-start mb-1">
          <label
            htmlFor="email"
            className="w-[100px] mt-4 text-neutral-800 font-bold text-lg flex items-center "
          >
            Email <span className="text-warning-500 px-2">*</span>
          </label>
          <ControlledTextField
            hasLabel={false}
            className="w-[720px] py-3"
            control={control}
            type={"text"}
            name={"email"}
            placeholder={"Masukan email"}
          />
        </section>
        <section className="flex gap-20 justify-between items-start mb-1">
          <label
            htmlFor="message"
            className="w-[100px] mt-4 text-neutral-800 font-bold text-lg flex items-center "
          >
            Pesan <span className="text-warning-500 px-2">*</span>
          </label>
          <ControlledTextField
            textAreaSize="medium"
            isTextArea={true}
            hasLabel={false}
            className="w-[720px] py-3"
            control={control}
            type={"message"}
            name={"message"}
            placeholder={"Masukan pesan"}
          />
        </section>
        <section className="w-full flex justify-end my-4">
          <Button size="extraLarge" type="primary" text="Ajukan Dokumen" />
        </section>
      </form>
    </div>
  );
};

export default DocumentProcessForm;
