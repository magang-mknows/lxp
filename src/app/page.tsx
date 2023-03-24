import LandingModule from "@/modules/landing";
import { NextPage } from "next";
import { ReactElement } from "react";

export const metadata = {
  title: "LXP App",
  description: "LXP App adalah LMS berbasis AI anjy mabar bosqu",
};

const Home: NextPage = (): ReactElement => {
  return <LandingModule />;
};

export default Home;
