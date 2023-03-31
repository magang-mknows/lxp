import UniqueEventPage from "@/components/organism/UniqueEventPage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const UniqueEventModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <UniqueEventPage />
    </ContentProvider>
  );
};

export default UniqueEventModule;
