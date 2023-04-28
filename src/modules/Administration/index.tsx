import { FC, lazy, ReactElement, Suspense } from "react";
import LayoutProvider from "@/providers/LayoutProvider";
import Breadcums from "@/components/atoms/Breadcums";
import { administrationBreadCumbs } from "@/utils/const";
import SuspenseError from "@/providers/SuspenseError";
import LoadingAdministration from "./loading";

const ContentAdministration = lazy(() => import("@/modules/Administration/ContentAdministration"));
const TitleAdministration = lazy(() => import("./TitleAdministration"));

const AdministrationModule: FC = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingAdministration />}>
      <LayoutProvider>
        <div className=" bg-[#F5F5F5] w-full">
          <Breadcums items={administrationBreadCumbs} />
          <div className="bg-[#FFFF] container mx-auto rounded-md p-10 ">
            <TitleAdministration />
            <ContentAdministration />
          </div>
        </div>
      </LayoutProvider>
    </SuspenseError>
  );
};

export default AdministrationModule;
