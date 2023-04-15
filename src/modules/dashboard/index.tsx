import DashboardPage from "@/components/organism/dashboard-page";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const DashboardModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <DashboardPage />
    </ContentProvider>
  );
};

export default DashboardModule;
