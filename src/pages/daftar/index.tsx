import RegisterModule from "@/modules/Register/RegisterModule";
import { NextPage } from "next";
import React, { ReactElement } from "react";
import { GetSessionParams, getSession } from "next-auth/react";

const Register: NextPage = (): ReactElement => {
  return <RegisterModule />;
};

export default Register;

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
