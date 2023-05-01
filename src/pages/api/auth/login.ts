import { loginRequest } from "@/modules/auth/api";
import type { NextApiRequest, NextApiResponse } from "next";

const ERROR_CODE = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == "POST") {
    loginRequest({
      email: "admin01@gmail.com",
      password: "admin01",
    });
  }
}
