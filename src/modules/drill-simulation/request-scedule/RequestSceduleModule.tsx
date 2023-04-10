import RequestScedulePage from "@/components/organism/RequestScedulePage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const RequestSceduleModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <RequestScedulePage />
    </ContentProvider>
  );
};

export default RequestSceduleModule;
