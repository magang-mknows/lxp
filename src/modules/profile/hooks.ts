import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { profileRequest } from "./api";
import { TUserDetailResponse } from "./types";
import { useSession } from "next-auth/react";
import { TMetaErrorResponse } from "@/service/types";

export const useProfile = (): UseQueryResult<TUserDetailResponse, TMetaErrorResponse> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ["get-user-me"],
    queryFn: async () => await profileRequest(),
  });
};
