import DocumentProcessPage from "@/components/organism/DocumentProcessPage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const DocumentProcessModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <DocumentProcessPage />
    </ContentProvider>
  );
};

export default DocumentProcessModule;
