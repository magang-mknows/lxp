import { IMetaResponse } from "@/services/api/type";

export type TDepartmentItems = {
  id: string;
  name: string;
  category: string;
  point: number;
  thumbnail: string;
  slug: string;
};

export type TDepartmentResponse = IMetaResponse<TDepartmentItems>;
