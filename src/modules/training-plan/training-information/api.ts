import api from "@/service/api";
import { TSubjectResponse } from "./types";

export const getSubjectByDepartmenId = async (id: string): Promise<TSubjectResponse> => {
  const { data } = await api.get(`/subjects/department/${id}`);
  return data;
};
