import RegisterModules from "@/components/organism/Register";
import RegisterModule from "@/modules/Register/RegisterModule";
import { NextPage } from "next";
import React, { ReactElement } from "react";

const Register: NextPage = (): ReactElement => {
  return <RegisterModule />;
};

export default Register;
