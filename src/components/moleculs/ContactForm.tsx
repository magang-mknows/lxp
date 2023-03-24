"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../atoms/Button";
import ControlledTextField from "../atoms/ControlledInput";
import Form from "../atoms/CommonForm";

const ContactForm = () => {
  const validationSchema = z.object({
    name: z.string().min(1, { message: "Masukan Nama Anda" }),
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    question: z.string().min(1, { message: "Masukan pertanyaan Anda" }),
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
      question: "",
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
    <Form onSubmit={onSubmit}>
      <section className="flex flex-col gap-2 mb-4 text-base">
        <ControlledTextField
          control={control}
          type={"text"}
          label={"Name"}
          name={"name"}
          placeholder={"Masukan Nama"}
        />
      </section>
      <section className="flex flex-col gap-2 mb-4 text-base">
        <ControlledTextField
          control={control}
          type={"email"}
          label={"Email"}
          name={"email"}
          placeholder={"Masukan Email"}
        />
      </section>
      <section className="flex flex-col gap-2 mb-8 text-base">
        <ControlledTextField
          isTextArea
          control={control}
          type={"text"}
          label={"Pertanyaan"}
          name={"question"}
          placeholder={"Masukan Pertanyaan"}
        />
      </section>
      <Button type="primary" text="Kirim" size="full" />
    </Form>
  );
};

export default ContactForm;
