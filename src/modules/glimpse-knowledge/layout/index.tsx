import GlimpseKnowledgeLayoutPage from "@/components/organism/GlimpseKnowledgeLayoutPage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const GlimpseKnowledgeLayout: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <GlimpseKnowledgeLayoutPage />
    </ContentProvider>
  );
};

export default GlimpseKnowledgeLayout;
