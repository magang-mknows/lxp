import { ICommonMetaResponse } from "@/service/types";

export type TDepartmentItems = {
  id: string;
  name: string;
  category: string;
  point: number;
  thumbnail: string;
  slug: string;
};

export type TDepartmentResponse = ICommonMetaResponse<TDepartmentItems>;
