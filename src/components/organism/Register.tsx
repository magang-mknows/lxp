import React, { Suspense } from "react";
import RegisterForm from "../moleculs/RegisterForm";
import SplashRegister from "../moleculs/SplashRegister";
import SplashRegisterLoading from "../moleculs/SplashRegisterLoading";

const RegisterPage = () => {
  return (
    <div className="lg:flex">
      <Suspense fallback={<SplashRegisterLoading />}>
        <SplashRegister />
      </Suspense>
      <Suspense fallback={<RegisterForm />}>
        <RegisterForm />
      </Suspense>
    </div>
  );
};

export default RegisterPage;
