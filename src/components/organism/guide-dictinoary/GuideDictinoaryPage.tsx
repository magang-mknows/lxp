"use client";
import React, { ReactElement, Suspense } from "react";
import LayoutProvider from "@/providers/LayoutProvider";
import Breadcums from "@/components/atoms/Breadcums";
import { guideDictinoaryBreadCumbs } from "@/utils/const";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("./sidebar"));
const ContentSection = dynamic(() => import("./content"));

const GuideDictionaryPage = (): ReactElement => {
  return (
    <div>
      <LayoutProvider className="!bg-[#FAFAFA]">
        <Suspense>
          <Breadcums items={guideDictinoaryBreadCumbs} />
          <div className="  flex flex-col-reverse lg:flex-row justify-start px-8 md:px-14 lg:px-16 w-full gap-36">
            <Sidebar />
            <ContentSection />
          </div>
        </Suspense>
      </LayoutProvider>
    </div>
  );
};

export default GuideDictionaryPage;
