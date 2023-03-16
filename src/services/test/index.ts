import ApiService from "@/services/api";

const TestService = {
  Get: async () => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      url: "/",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
export default TestService;
