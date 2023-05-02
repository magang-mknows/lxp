import api from "@/service/api";
import { TUserDetailResponse } from "./types";

export const profileRequest = async (): Promise<TUserDetailResponse> => {
  const { data } = await api.get("/users/me");
  return data;
};