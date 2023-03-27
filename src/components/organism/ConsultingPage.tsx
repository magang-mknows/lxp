import { ConsultingBreadCumbs } from "@/utils/const";
import React, { FC, ReactElement } from "react";

import Breadcums from "../atoms/Breadcums";
import ConstultingQuestionsHeader from "../moleculs/ConstultingQuestionsHeader";
import ConsultingHeader from "../moleculs/ConsultingHeader";
import ConsultingProduct from "../moleculs/ConsultingProduct";
import ConsultingQuestions from "../moleculs/ConsultingQuestions";

const ConsultingPage: FC = (): ReactElement => {
  return (
    <section className="min-h-[100vh] bg-neutral-50/60">
      <Breadcums items={ConsultingBreadCumbs} />
      <ConsultingHeader />
      <ConsultingProduct />
      <ConstultingQuestionsHeader />
      <ConsultingQuestions />
    </section>
  );
};

export default ConsultingPage;
