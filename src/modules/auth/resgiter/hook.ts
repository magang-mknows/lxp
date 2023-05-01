import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TRegisterPayload } from "./types";
import { registerRequest } from "./api";
import { TMetaErrorResponse, TRegisterMetaResponse } from "@/service/types";

export const useRegister = (): UseMutationResult<
  TRegisterMetaResponse,
  TMetaErrorResponse,
  TRegisterPayload,
  unknown
> =>
  useMutation({
    mutationKey: ["key"],
    mutationFn: async (payload) => await registerRequest(payload),
  });
