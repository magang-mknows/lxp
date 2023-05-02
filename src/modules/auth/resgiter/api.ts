import { TRegisterPayload } from "./types";
import api from "@/service/api";
import { TRegisterMetaResponse } from "@/service/types";

export const registerRequest = async (payload: TRegisterPayload): Promise<TRegisterMetaResponse> =>
  await api.post("/auth/register", payload);
