import { ConsultingBreadCumbs } from "@/utils/const";
import dynamic from "next/dynamic";
import React, { FC, ReactElement } from "react";

import Breadcums from "../atoms/Breadcums";
import ConstultingQuestionsHeader from "../moleculs/ConstultingQuestionsHeader";
import ConsultingAndServiceHeader from "../moleculs/ConsultingAndServiceHeader";
import ConsultingAndServiceProduct from "../moleculs/ConsultingAndServiceProduct";
const ConsultingAndServiceQuestions = dynamic(
  () => import("../moleculs/ConsultingAndServiceQuestions"),
  {
    ssr: false,
  },
);

const ConsultingPage: FC = (): ReactElement => {
  return (
    <section className="min-h-[100vh] bg-neutral-50/60">
      <Breadcums items={ConsultingBreadCumbs} />
      <ConsultingAndServiceHeader />
      <ConsultingAndServiceProduct />
      <ConstultingQuestionsHeader />
      <ConsultingAndServiceQuestions />
    </section>
  );
};

export default ConsultingPage;
