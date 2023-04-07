"use client";
import UniqueEventDetailLoading from "@/modules/unique-event/unique-event-detail/UniqueEventDetailLoading";
import { UniqueEventBreadCumbs } from "@/utils/const";
import { FC, lazy, ReactElement, Suspense } from "react";
import Breadcums from "../atoms/Breadcums";

const EventDetailTab = lazy(() => import("../moleculs/EventDetailTab"));
const EventDetailBanner = lazy(() => import("../moleculs/EventDetailBanner"));

const UniqueEventDetailPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20 ">
      <Breadcums items={UniqueEventBreadCumbs} />
      <Suspense fallback={<UniqueEventDetailLoading />}>
        <section className="px-8 md:px-14 lg:px-16">
          <EventDetailBanner />
          <EventDetailTab />
        </section>
      </Suspense>
    </section>
  );
};

export default UniqueEventDetailPage;
