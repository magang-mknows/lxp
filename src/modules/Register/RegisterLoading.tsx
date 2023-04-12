import RegisterFormLoading from "@/components/moleculs/RegisterFormLoading";
import SplashRegisterLoading from "@/components/moleculs/SplashRegisterLoading";
import React, { ReactElement } from "react";

const RegisterLoadingModules = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SplashRegisterLoading />
      <RegisterFormLoading />
    </div>
  );
};

export default RegisterLoadingModules;
