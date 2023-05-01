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

import { ICommonMetaResponse } from "../../service/types";

export type TAdministrationItems = {
  id: string;
  name: string;
  category: string;
  point: number;
  thumbnail: string;
  slug: string;
};

export type TAdministrationResponse = ICommonMetaResponse<TAdministrationItems>;

