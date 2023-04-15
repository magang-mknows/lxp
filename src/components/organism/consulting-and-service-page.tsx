"use client";

import { ConsultingBreadCumbs } from "@/utils/const";
import React, { FC, lazy, ReactElement, Suspense } from "react";

import Breadcums from "../atoms/breadcums";
import ConstultingQuestionsHeader from "../moleculs/constulting-questions-header";
import ConsultingAndServiceHeader from "../moleculs/consulting-and-service-header";
import ConsultingAndServiceProduct from "../moleculs/consulting-and-service-product";
const ConsultingAndServiceQuestions = lazy(
  () => import("../moleculs/consulting-and-service-questions"),
);

const ConsultingPage: FC = (): ReactElement => {
  return (
    <section className="min-h-[100vh] bg-neutral-50/60">
      <Breadcums items={ConsultingBreadCumbs} />
      <ConsultingAndServiceHeader />
      <ConsultingAndServiceProduct />
      <ConstultingQuestionsHeader />
      <Suspense>
        <ConsultingAndServiceQuestions />
      </Suspense>
    </section>
  );
};

export default ConsultingPage;
