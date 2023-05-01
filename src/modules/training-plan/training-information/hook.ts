import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TSubjectResponse } from "./types";
import { getSubjectByDepartmenId } from "./api";

export const useGetSubjectByDepartmenId = (id: string): UseQueryResult<TSubjectResponse, unknown> =>
  useQuery({
    queryKey: ["get-subject-by-department-id"],
    queryFn: async () => await getSubjectByDepartmenId(id),
  });
