import ConsultingAndServiceModule from "@/modules/consulting-service/ConsultingAndServiceModule";
import { NextPage } from "next";
import React, { ReactElement } from "react";

export const metadata = {
  title: "Konsultasi & Service | LXP App",
};

const ConsltingPage: NextPage = (): ReactElement => {
  return <ConsultingAndServiceModule />;
};

export default ConsltingPage;
