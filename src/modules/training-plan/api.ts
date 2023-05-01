import api from "@/service/api";
import { TDepartmentResponse } from "./types";

export const getDepartmentsRequest = async (): Promise<TDepartmentResponse> => {
  const { data } = await api.get("/departments");
  return data;
};

export const getSearchDepartments = async (keyword: string): Promise<TDepartmentResponse> => {
  const { data } = await api.get(`/departments/filter?search=${keyword}`);
  return data;
};
