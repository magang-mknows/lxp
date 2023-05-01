import { useRecoilState } from "recoil";
import { PrivateInformationState, AdministrationStatusState } from "./store";
import {
  ReturnTypesPrivateInformation,
  StatusReturnTypesAdministration,
  TAdministrationResponse,
} from "./type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
// import { AdministrationService } from "./api";

export const usePrivateInformationStatus = (): ReturnTypesPrivateInformation => {
  const [get, set] = useRecoilState(PrivateInformationState);
  return {
    setPrivateStatus: (val: boolean) => set(val),
    getPrivateStatus: get,
  };
};
export const useAdministrationStatus = (): StatusReturnTypesAdministration => {
  const [getStatus, setStatus] = useRecoilState(AdministrationStatusState);
  return {
    setAdministrationStatus: (val: string) => setStatus(val),
    getAdministrationStatus: getStatus,
  };
};

export const useGetAllDepartment = (): UseQueryResult<TAdministrationResponse, unknown> =>
  useQuery<TAdministrationResponse>({
    queryKey: ["get-all-administration"],
    // queryFn: async () => await AdministrationService.GetAllAdministration(),
  });
