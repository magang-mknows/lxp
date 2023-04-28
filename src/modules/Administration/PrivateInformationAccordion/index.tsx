import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { handleError } from "@/utilities/helper";
// import Button from "@/components/Common/Button";
import { usePrivateInformationStatus, useAdministrationStatus } from "../hooks";
import ControlledTextField from "@/components/atoms/ControlledInput";
import Form from "@/components/atoms/CommonForm";
import Accordion from "@/components/atoms/Accordion";
import Button from "@/components/atoms/Button";

const PrivateInformationSection: FC = (): ReactElement => {
  const validationSchema = z.object({
    fullname: z.string().min(1, { message: "Nama lengkap harus diisi" }),
    nip: z.string().min(1, { message: " NIP harus diisi" }),
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    department: z.string().min(1, { message: "Divisi / departemen harus diisi" }),
    companyName: z.string().min(1, { message: "Nama Perusahaan harus diisi" }),
    leaderDivision: z.string().min(1, { message: " Kepala Divisi harus diisi" }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { setPrivateStatus, getPrivateStatus } = usePrivateInformationStatus();
  const { setAdministrationStatus } = useAdministrationStatus();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      companyName: "",
      email: "",
      leaderDivision: "",
      nip: "",
      fullname: "",
      department: "",
    },
  });

  const onSubmit = handleSubmit(() => {
    try {
      setPrivateStatus(true);
      setAdministrationStatus("finished");
    } catch (err) {
      setPrivateStatus(false);
      throw err;
    }
  });

  return (
    <Accordion
      idAccordion={getPrivateStatus ? "" : "privat-information"}
      title="Informasi Pribadi"
      disabled={getPrivateStatus ? true : false}
    >
      <Form onSubmit={onSubmit}>
        <div className="lg:flex w-full gap-[55px]">
          <div className="w-full">
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"fullname"}
                label={"Nama Lengkap"}
                name={"fullname"}
                placeholder={"Masukkan nama lengkap"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block  mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"nip"}
                label={"Nomor Induk Pegawai"}
                name={"nip"}
                placeholder={"masukkan NIP"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"email"}
                label={"Alamat Email"}
                name={"email"}
                placeholder={"Masukkan alamat email"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
          </div>
          <div className="w-full">
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"department"}
                label={"Nama Perusahaan"}
                name={"companyName"}
                placeholder={"Masukkan Nama Perusahaan"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"department"}
                label={"Divisi / Departemen"}
                name={"department"}
                placeholder={"Masukkan Divisi / Departemen"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <ControlledTextField
                hasLabel
                control={control}
                type={"leaderDivision"}
                label={"Nama Kepala Divisi"}
                name={"leaderDivision"}
                placeholder={"Nama Kepala Divisi"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="flex w-full my-8 justify-end">
              <Button
                disabled={!isValid}
                className="my-4 w-[211px] rounded-[8px] disabled:bg-gray-400 disabled:text-gray-200 bg-blue-600 text-white font-bold p-3 text-1xl"
                text={"Simpan Informasi Pribadi"}
              />
            </div>
          </div>
        </div>
      </Form>
    </Accordion>
  );
};

export default PrivateInformationSection;
