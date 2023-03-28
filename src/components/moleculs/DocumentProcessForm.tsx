"use client";

import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ControlledTextField from "../atoms/ControlledInput";
import Form from "../atoms/CommonForm";

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
    <div className="mx-40 my-10 bg-neutral-50 rounded-md shadow-sm min-h-[80vh]">
      <form className="px-16 py-16 w-full ">
        <section className="flex gap-20 justify-between items-start">
          <label
            htmlFor="name"
            className="w-[100px] mt-3 text-neutral-800 font-bold text-lg flex items-center justify-center"
          >
            Nama <span className="text-warning-500 px-2">*</span>
          </label>
          <ControlledTextField
            hasLabel={false}
            className="w-[800px]"
            control={control}
            type={"text"}
            name={"name"}
            placeholder={"Masukan Nama"}
          />
        </section>
        <section className="flex gap-20 justify-between items-start">
          <label
            htmlFor="name"
            className="w-[100px] mt-3 text-neutral-800 font-bold text-lg flex items-center justify-center"
          >
            NIP <span className="text-warning-500 px-2">*</span>
          </label>
          <ControlledTextField
            hasLabel={false}
            className="w-[800px]"
            control={control}
            type={"text"}
            name={"nip"}
            placeholder={"Masukan Nama"}
          />
        </section>
      </form>
    </div>
  );
};

export default DocumentProcessForm;
