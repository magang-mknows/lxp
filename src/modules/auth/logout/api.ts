import api from "@/service/api";
import { signOut } from "next-auth/react";

export const logoutRequest = async ({ refresh_token }: { refresh_token: string }) => {
  await api.post("/auth/logout", { refresh_token });
  signOut();
};
