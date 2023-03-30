import React, { Suspense } from "react";
import RegisterForm from "../moleculs/RegisterForm";
import SplashRegister from "../moleculs/SplashRegister";

const RegisterPage = () => {
  return (
    <div className="lg:flex">
      <Suspense>
        <SplashRegister />
      </Suspense>
      <Suspense>
        <RegisterForm />
      </Suspense>
    </div>
  );
};

export default RegisterPage;
