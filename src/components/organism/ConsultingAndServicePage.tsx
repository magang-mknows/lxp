"use client";

import { ConsultingBreadCumbs } from "@/utils/const";
import React, { FC, lazy, ReactElement, Suspense } from "react";

import Breadcums from "../atoms/Breadcums";
import ConstultingQuestionsHeader from "../moleculs/ConstultingQuestionsHeader";
import ConsultingAndServiceHeader from "../moleculs/ConsultingAndServiceHeader";
import ConsultingAndServiceProduct from "../moleculs/ConsultingAndServiceProduct";
import SuspenseError from "@/providers/SuspenseError";
import QuestionLoading from "@/modules/consulting-service/loading/QuestionLoading";
const ConsultingAndServiceQuestions = lazy(
  () => import("../moleculs/ConsultingAndServiceQuestions"),
);

const ConsultingPage: FC = (): ReactElement => {
  return (
    <section className="min-h-[100vh] bg-neutral-50/60">
      <Breadcums items={ConsultingBreadCumbs} />
      <ConsultingAndServiceHeader />

      <ConsultingAndServiceProduct />
      <ConstultingQuestionsHeader />
      <SuspenseError loadingFallback={<QuestionLoading />}>
        <ConsultingAndServiceQuestions />
      </SuspenseError>
    </section>
  );
};

export default ConsultingPage;
