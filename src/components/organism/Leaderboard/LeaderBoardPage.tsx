"use client";
import React, { ReactElement } from "react";
import Breadcums from "@/components/atoms/breadcums";
import { leaderBoardBreadCumbs } from "@/utils/const";
import dynamic from "next/dynamic";
import LayoutProvider from "@/providers/LayoutProvider";

const ContentSection = dynamic(() => import("./ContentSection"));

const LeaderBoardPages = (): ReactElement => {
  return (
    <LayoutProvider className="!bg-[#FAFAFA] dark:!bg-[#222529] ">
      <Breadcums items={leaderBoardBreadCumbs} />
      <ContentSection />
    </LayoutProvider>
  );
};

export default LeaderBoardPages;
