"use client";
import UniqueEventDetailLoading from "@/modules/unique-event/unique-event-detail/loading";
import { UniqueEventBreadCumbs } from "@/utils/const";
import dynamic from "next/dynamic";
import { FC, ReactElement, Suspense } from "react";
import Breadcums from "../atoms/breadcums";

const EventDetailTab = dynamic(() => import("../moleculs/event-detail-tab"), {
  ssr: false,
});
const EventDetailBanner = dynamic(() => import("../moleculs/event-detail-banner"), {
  ssr: false,
});

const UniqueEventDetailPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20 ">
      <Suspense fallback={<UniqueEventDetailLoading />}>
        <Breadcums items={UniqueEventBreadCumbs} />
        <section className="px-8 md:px-14 lg:px-16">
          <EventDetailBanner />
          <EventDetailTab />
        </section>
      </Suspense>
    </section>
  );
};

export default UniqueEventDetailPage;
