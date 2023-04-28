import ApiService from "@/modules/service/api";
import { TSubjectResponse } from "./type";

export const SebjectService = {
  GetSubjectByDepartmenId: async (id: string): Promise<TSubjectResponse> => {
    const requestData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: `/subjects/department/${id}`,
    };
    try {
      const result = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return result.data;
    } catch (error) {
      throw console.log(error);
    }
  },
};
