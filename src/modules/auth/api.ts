import api from "../../service/api";
import { TLoginResponse, TLoginPayload, TLoginByGooglePayload } from "./types";

export const loginRequest = async (payload?: TLoginPayload): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>("/auth/login", payload);
  return data;
};

export const loginByGoogleRequest = async (
  payload: TLoginByGooglePayload,
): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>("/auth/login/google/callback", payload);
  return data;
};
