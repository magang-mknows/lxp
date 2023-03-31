import { UniqueEventBreadCumbs } from "@/utils/const";
import { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import EventDetailBanner from "../moleculs/EventDetailBanner";
import EventDetailPanel from "../moleculs/EventDetailPanel";
import EventDetailTab from "../moleculs/EventDetailTab";

const UniqueEventDetailPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20 ">
      <Breadcums items={UniqueEventBreadCumbs} />
      <section className="px-8 md:px-14 lg:px-16">
        <EventDetailBanner />
        <EventDetailTab />
      </section>
    </section>
  );
};

export default UniqueEventDetailPage;
