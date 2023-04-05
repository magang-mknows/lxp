"use client";
import { discussionRoomBreadCumbs } from "@/utils/const";
import React, { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import DiscussionContent from "../moleculs/DiscussionContent";
import DiscussionHero from "../moleculs/DiscussionHero";

const DiscussionRoomPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-100/60 min-h-[100vh] pb-20">
      <Breadcums items={discussionRoomBreadCumbs} />
      <DiscussionHero />
      <DiscussionContent />
    </section>
  );
};

export default DiscussionRoomPage;
