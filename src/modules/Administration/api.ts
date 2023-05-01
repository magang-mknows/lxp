import api from "@/service/api";
import { TAdministrationResponse } from "./type";

export const getAdministrationRequest = async (): Promise<TAdministrationResponse> => {
  const { data } = await api.get("/administrations/me");
  return data;
};
