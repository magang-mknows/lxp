"use client";

import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ControlledTextField from "../atoms/ControlledInput";
import Form from "../atoms/CommonForm";
import Button from "../atoms/Button";
import ControlledUploadField from "./ControlledUploadField";

const DocumentProcessForm: FC = (): ReactElement => {
  const MAX_FILE_SIZE = 3000000;
  const ACCEPTED_PDF_TYPES = ["application/pdf"];

  const validationSchema = z.object({
    name: z.string().min(1, { message: "Masukan Nama Anda" }),
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    nip: z.string().min(1, { message: "Masukan NIP Anda" }),
    message: z.string().min(1, { message: "Masukan pesan Anda" }),
    upload_doc: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        "Harus ada file yang di upload.",
      )
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0].type),
        "hanya menerima .pdf",
      ),
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
      upload_doc: undefined,
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
      <Form onSubmit={onSubmit} className="px-8 md:px-14 lg:px-16 py-8 md:py-14 lg:py-16 w-full ">
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <label htmlFor="name" className="mb-1 text-neutral-800 font-bold text-base lg:text-lg  ">
            Nama <span className="text-warning-500 px-2">*</span>
          </label>
          <div className="col-span-3 ">
            <ControlledTextField
              hasLabel={false}
              className="w-full py-2 md:py-3"
              control={control}
              type={"text"}
              name={"name"}
            />
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <label htmlFor="nip" className=" mb-1 text-neutral-800 font-bold text-base lg:text-lg ">
            NIP <span className="text-warning-500 px-2">*</span>
          </label>
          <div className=" col-span-3">
            <ControlledTextField
              hasLabel={false}
              className="w-full py-3"
              control={control}
              type={"number"}
              name={"nip"}
            />
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <label htmlFor="email" className=" mb-1 text-neutral-800 font-bold text-base lg:text-lg ">
            Email <span className="text-warning-500 px-2">*</span>
          </label>
          <div className=" col-span-3">
            <ControlledTextField
              hasLabel={false}
              className="w-full py-3"
              control={control}
              type={"email"}
              name={"email"}
            />
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <label htmlFor="message" className=" mb-1 text-neutral-800 font-bold text-lg">
            Pesan <span className="text-warning-500 px-2">*</span>
          </label>
          <div className=" col-span-3">
            <ControlledTextField
              textAreaSize="medium"
              isTextArea={true}
              hasLabel={false}
              className="w-full py-3"
              control={control}
              type={"message"}
              name={"message"}
            />
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <label htmlFor="upload_doc" className=" mb-1 text-neutral-800 font-bold text-lg">
            Ugggah Dokumen <span className="text-warning-500 px-2">*</span>
          </label>
          <div className=" col-span-3">
            <ControlledUploadField
              className="w-full "
              hasLabel={false}
              control={control}
              required
              name={"upload_doc"}
              accepted=".jpg, .jpeg, .pdf"
            />
          </div>
        </section>
        <section className="w-full flex justify-start md:justify-end">
          <Button size="large" type="primary" text="Ajukan Dokumen" disabled={!isValid} />
        </section>
      </Form>
    </div>
  );
};

export default DocumentProcessForm;
