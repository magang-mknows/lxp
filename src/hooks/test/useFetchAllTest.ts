import { useQuery } from "@tanstack/react-query";
import TestService from "@/services/test";
import { TTestResponse } from "@/services/test/types";

export const useFetchAllTest = () =>
  useQuery<TTestResponse>({
    queryKey: ["fetch-all-test"],
    queryFn: async () => await TestService.Get(),
  });
