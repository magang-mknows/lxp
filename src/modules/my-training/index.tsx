import Breadcums from "@/components/atoms/Breadcums";
import MyTrainingPage from "@/components/organism/my-training";
import LayoutProvider from "@/providers/LayoutProvider";
import { myTrainingBreadCumbs } from "@/utils/const";
import React, { ReactElement } from "react";

const MyTrainingModule = (): ReactElement => {
  return (
    <LayoutProvider className="!bg-[#FFFF]">
      <Breadcums items={myTrainingBreadCumbs} />
      <MyTrainingPage />
    </LayoutProvider>
  );
};

export default MyTrainingModule;
