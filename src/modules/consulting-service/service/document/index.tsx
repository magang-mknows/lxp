import DocumentServicePage from "@/components/organism/document-service-page";
import ContentProvider from "@/providers/ContentProvider";
import React, { FC, ReactElement } from "react";

const DocumentServiceModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <DocumentServicePage />
    </ContentProvider>
  );
};

export default DocumentServiceModule;
