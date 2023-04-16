import AboutModule from "@/modules/about/AboutModule.tsx";
import { NextPage } from "next";
import { ReactElement } from "react";

export const metadata = {
  title: "Tentang | LXP App",
  description:
    "M-Knows Consulting jasa layanan konsultasi dan training terbaik untuk kepentingan bisnis perusahaan mengutamakan Activity Based Learning",
};

const AboutUs: NextPage = (): ReactElement => {
  return <AboutModule />;
};

export default AboutUs;
