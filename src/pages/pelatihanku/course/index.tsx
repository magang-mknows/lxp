import { FC, ReactElement } from "react";
import LayoutProvider from "@/providers/LayoutProvider";
import dynamic from "next/dynamic";
import Breadcums from "@/components/atoms/Breadcums";
import { myTrainingCourseBreadCumbs } from "@/utils/const";

const CourseMyTrainingPage = dynamic(() => import("@/components/organism/my-training-course"));

const CourseModule: FC = (): ReactElement => {
  return (
    <LayoutProvider>
      <Breadcums items={myTrainingCourseBreadCumbs} />
      <CourseMyTrainingPage />
    </LayoutProvider>
  );
};

export default CourseModule;
