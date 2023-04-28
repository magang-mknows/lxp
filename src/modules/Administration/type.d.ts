export type ReturnTypesPrivateInformation = {
  setPrivateStatus: (val: boolean) => void;
  getPrivateStatus: boolean;
};

export type ReturnTypesJobInformation = {
  setJobStatus: (val: boolean) => void;
  getJobStatus: boolean;
};

export type ReturnTypesFileInformation = {
  setFileStatus: (val: boolean) => void;
  getFileStatus: boolean;
};

export type StatusReturnTypesAdministration = {
  setAdministrationStatus: (val: string) => void;
  getAdministrationStatus: string;
};

export const optionsGender = [
  {
    value: "pilih",
    label: "Pilih jenis kelamin",
  },
  {
    value: "P",
    label: "Perempuan",
  },
  {
    value: "L",
    label: "Laki - Laki",
  },
];

export const optionsLastEducation = [
  {
    value: "pilih",
    label: "Pilih pendidikan terakhir",
  },
  {
    value: "NA",
    label: "Tidak lulus SD / belum tamat SD",
  },
  {
    value: "ELEMENTARY",
    label: "Tamat SD / setingkat",
  },
  {
    value: "HIGHSCHOOL",
    label: "Tamat SMP / setingkat",
  },
  {
    value: "SENIORHS",
    label: "Tamat SMA / setingkat",
  },
  {
    value: "DIPLOMA",
    label: "Diploma 1 / 2 / 3",
  },
  {
    value: "BACHELOR",
    label: "Sarjana (S1)",
  },
  {
    value: "MAGISTRATE",
    label: "Magister (S2)",
  },
  {
    value: "DOCTORATE",
    label: "Doktor (S3)",
  },
];
