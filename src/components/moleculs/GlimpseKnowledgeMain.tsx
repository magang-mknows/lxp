import { FC, ReactElement, lazy } from "react";
import GlimpseKnowledgeSearch from "../atoms/GlimpseKnowledgeSearch";
import SuspenseError from "@/providers/SuspenseError";
import CardLoading from "@/modules/glimpse-knowledge/loading/CardLoading";

const GlimpseKnowledgeCard = lazy(() => import("./GlimpseKnowledgeCard"));

const GlimpseKnowledgeMain: FC = (): ReactElement => {
  return (
    <main className="px-8 md:px-14 lg:px-16 pb-20">
      <section className="bg-neutral-100 h-[56px] mb-14 mt-10 w-full rounded-md shadow-sm">
        <GlimpseKnowledgeSearch />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <SuspenseError loadingFallback={<CardLoading />}>
          <GlimpseKnowledgeCard />
        </SuspenseError>
      </section>
    </main>
  );
};

export default GlimpseKnowledgeMain;
