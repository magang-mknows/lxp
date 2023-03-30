import RegisterFormLoading from "@/components/moleculs/RegisterFormLoading";
import SplashRegisterLoading from "@/components/moleculs/SplashRegisterLoading";
import React, { ReactElement } from "react";

const RegisterLoadingModules = (): ReactElement => {
  return (
    <div className="lg:flex">
      <SplashRegisterLoading />
      <RegisterFormLoading />
    </div>
  );
};

export default RegisterLoadingModules;
