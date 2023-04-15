import UniqueEventDetailPage from "@/components/organism/unique-event-detail-page";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const UniqueEventDetailModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <UniqueEventDetailPage />
    </ContentProvider>
  );
};

export default UniqueEventDetailModule;
