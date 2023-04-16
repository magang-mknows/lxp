"use client";
// import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { FC, ReactElement } from "react";
// import { courseBreadCumbs } from "@/utilities/constant";
import LayoutProvider from "@/providers/LayoutProvider";
import dynamic from "next/dynamic";

const CourseHome = dynamic(() => import("./CourseHome"));

const CourseModule: FC = (): ReactElement => {
  return (
    <LayoutProvider>
      {/* <BreadCrumb items={courseBreadCumbs} /> */}
      <CourseHome />
    </LayoutProvider>
  );
};

export default CourseModule;
