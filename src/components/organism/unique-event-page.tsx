"use client";

import { UniqueEventBreadCumbs } from "@/utils/const";
import { usePathname, redirect } from "next/navigation";
import React, { FC, ReactElement } from "react";
import Breadcums from "../atoms/breadcums";
import UniqueEventSearch from "../atoms/unique-event-search";
import UniqueEventContent from "../moleculs/unique-event-content";
import UniqueEventSidebar from "../moleculs/unique-event-sidebar";

const UniqueEventPage: FC = (): ReactElement => {
  const pathname = usePathname();
  const eventPath = ["/acara-unik", "/acara-unik/terdaftar", "/acara-unik/riwayat"];

  if (!eventPath.includes(pathname)) {
    redirect("/acara-unik");
  }
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20">
      <Breadcums items={UniqueEventBreadCumbs} />
      <section className="grid grid-cols-1 lg:grid-cols-3 px-8 md:px-14 lg:px-16 gap-20">
        <UniqueEventSidebar />
        <section className="col-span-2">
          <UniqueEventSearch />
          <UniqueEventContent />
        </section>
      </section>
    </section>
  );
};

export default UniqueEventPage;
