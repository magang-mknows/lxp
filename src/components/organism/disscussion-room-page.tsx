"use client";
import { discussionRoomBreadCumbs } from "@/utils/const";
import React, { FC, ReactElement } from "react";
import Breadcums from "../atoms/breadcums";
import DiscussionContent from "../moleculs/discussion-content";
import DiscussionHero from "../moleculs/discussion-hero";

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
