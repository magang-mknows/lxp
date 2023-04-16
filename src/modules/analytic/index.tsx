import AnalyticPage from "@/components/organism/AnalyticPage";
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
