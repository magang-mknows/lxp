import LandingModule from "@/modules/landing";
import { NextPage } from "next";
import { ReactElement } from "react";
import { GetSessionParams, getSession } from "next-auth/react";

const Home: NextPage = (): ReactElement => {
  return <LandingModule />;
};

export default Home;

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
