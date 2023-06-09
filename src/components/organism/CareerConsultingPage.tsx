"use client";
import { CareerConsultingBreadCumbs } from "@/utils/const";

import React, { FC, lazy, ReactElement, Suspense } from "react";
import Breadcums from "../atoms/Breadcums";
import CareerConsultingHeader from "../moleculs/CareerConsultingHeader";
import ConsultingChatContainer from "../moleculs/ConsultingChatContainer";

const ConsultingChatList = lazy(() => import("../moleculs/ConsultingChatList"));

const CareerConsultingPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20">
      <Breadcums items={CareerConsultingBreadCumbs} />
      <CareerConsultingHeader />
      <section className="grid grid-cols-1 lg:grid-cols-3 px-8 md:px-14 lg:px-16">
        <section className="px-0 md:px-5 lg:px-6 mb-10">
          <Suspense>
            <ConsultingChatList />
          </Suspense>
        </section>
        <section className="col-span-2 bg-neutral-50 px-20 min-h-[80vh]">
          <ConsultingChatContainer />
        </section>
      </section>
    </section>
  );
};

export default CareerConsultingPage;
