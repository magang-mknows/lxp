import RegisterPage from "@/components/organism/Register";
import ClienProvider from "@/providers/ClientProvider";
import React, { ReactElement } from "react";

const RegisterModule = (): ReactElement => {
  return (
    <ClienProvider>
      <RegisterPage />
    </ClienProvider>
  );
};

export default RegisterModule;
