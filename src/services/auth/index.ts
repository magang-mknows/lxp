import ApiService from "@/services/api";
import TokenService from "@/services/token";
import { TAuth } from "./types";

const AuthService = {
  Login: async (payload: TAuth) => {
    const { email, password } = payload;
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: {
        email,
        password,
      },
      url: "/auth/login",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      TokenService.saveToken(res.data.access_token);
      TokenService.saveRefreshToken(res.data.refresh_token);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw error;
    }
  },

  Logout: () => {
    ApiService.removeHeader();
    TokenService.removeToken();
    TokenService.removeRefreshToken();
    window.location.reload();
  },

  Register: async (payload: TAuth) => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: payload,
      url: "/auth/register",
    };
    try {
      await ApiService.customRequest(requestData);
    } catch (error) {
      throw error;
    }
  },

  RefreshToken: async () => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        refresh_token: TokenService.getRefreshToken(),
      },
      url: "/auth/refresh",
    };
    try {
      const response = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
export default AuthService;
