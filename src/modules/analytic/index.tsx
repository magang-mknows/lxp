import AnalyticPage from "@/components/organism/analytic-page";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const AnalyticModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <AnalyticPage />
    </ContentProvider>
  );
};

export default AnalyticModule;
