import React, { FC, ReactElement } from "react";
import GlimpseKnowledgeHeader from "../moleculs/GlimpseKnowledgeHeader";
import GlimpseKnowledgeMain from "../moleculs/GlimpseKnowledgeMain";

const GlimpseKnowledgePage: FC = (): ReactElement => {
  return (
    <section className="min-h-[140vh] bg-neutral-50/60">
      <GlimpseKnowledgeHeader />
      <GlimpseKnowledgeMain />
    </section>
  );
};

export default GlimpseKnowledgePage;
