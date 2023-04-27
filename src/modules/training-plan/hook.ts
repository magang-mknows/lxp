import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TDepartmentResponse } from "./type";
import { DepartmentService } from "./api";

export const useGetAllDepartment = (): UseQueryResult<TDepartmentResponse, unknown> =>
  useQuery<TDepartmentResponse>({
    queryKey: ["get-all-department"],
    queryFn: async () => await DepartmentService.GetAllDepartment(),
  });
