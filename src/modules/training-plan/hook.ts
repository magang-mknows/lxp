import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TDepartmentResponse } from "./types";
import { getDepartmentsRequest, getSearchDepartments } from "./api";

export const useGetAllDepartments = (): UseQueryResult<TDepartmentResponse, unknown> =>
  useQuery<TDepartmentResponse>({
    queryKey: ["get-all-department"],
    queryFn: async () => await getDepartmentsRequest(),
  });

export const useSearchDepartments = (
  keyword: string,
): UseQueryResult<TDepartmentResponse, unknown> =>
  useQuery<TDepartmentResponse>({
    queryKey: ["search-department"],
    queryFn: async () => await getSearchDepartments(keyword),
  });
