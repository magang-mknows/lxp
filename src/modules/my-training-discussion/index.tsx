import Breadcums from "@/components/atoms/Breadcums";
import LayoutProvider from "@/providers/LayoutProvider";
import { myTrainingModuleBreadCumbs } from "@/utils/const";
import { FC, lazy, ReactElement } from "react";

const Sidebar = lazy(() => import("./sidebar"));
const Content = lazy(() => import("./content"));

const MyTrainingDiscussionModule: FC = (): ReactElement => {
  return (
    <LayoutProvider className="!bg-[#FAFAFA]">
      <Breadcums items={myTrainingModuleBreadCumbs} />
      <div className="w-full flex md:flex-row flex-col gap-10 px-6 md:px-8 lg:px-10 py-5   dark:bg-[#222529]">
        <div className="md:basis-3/12 ">
          <Sidebar />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </LayoutProvider>
  );
};

export default MyTrainingDiscussionModule;
