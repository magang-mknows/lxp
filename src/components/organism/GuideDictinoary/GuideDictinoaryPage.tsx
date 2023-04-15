"use client";
import React, { ReactElement, Suspense } from "react";
import LayoutProvider from "@/providers/LayoutProvider";
import Breadcums from "@/components/atoms/breadcums";
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
          <div className=" w-full flex flex-col-reverse lg:flex-row justify-center lg:gap-[90px]">
            <Sidebar />
            <ContentSection />
          </div>
        </Suspense>
      </LayoutProvider>
    </div>
  );
};

export default GuideDictionaryPage;
