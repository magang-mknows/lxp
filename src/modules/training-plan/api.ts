import ApiService from "../service/api";
import { TDepartmentResponse } from "./type";

export const DepartmentService = {
  GetAllDepartment: async (): Promise<TDepartmentResponse> => {
    const requestData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/departments",
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
