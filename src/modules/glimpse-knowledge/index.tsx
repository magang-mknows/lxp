import GlimpseKnowledgePage from "@/components/organism/GlimpseKnowledgePage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const GlimpseKnowledgeModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <GlimpseKnowledgePage />
    </ContentProvider>
  );
};

export default GlimpseKnowledgeModule;
