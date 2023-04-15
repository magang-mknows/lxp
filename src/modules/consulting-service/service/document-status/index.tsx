import DocumentStatusPage from "@/components/organism/document-status-page";
import ContentProvider from "@/providers/ContentProvider";
import React, { FC, ReactElement } from "react";

const DocumentStatusModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <DocumentStatusPage />
    </ContentProvider>
  );
};

export default DocumentStatusModule;
