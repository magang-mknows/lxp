import { FC, Fragment, ReactElement } from "react";

const RelatedGlimpseKnowledgeCard: FC = (): ReactElement => {
  return (
    <section className="py-2">
      <section className="flex gap-2 items-center">
        <figure className="h-24 w-20 flex-shrink-0 rounded-md bg-blue-200"></figure>
        <main>
          <h1 className="font-bold text-sm pr-10 mb-2">
            Kesalahan para tenaga pengajar baru yang sering dijumpai!
          </h1>
          <section className="flex items-center gap-2">
            <div className="px-4 py-2 rounded-md shadow-sm text-neutral-800 font-bold bg-secondary-blue-100 w-fit text-xs">
              <h1>#softskills</h1>
            </div>{" "}
            <span>|</span> <h1 className="text-xs text-neutral-600">01/04/2023 - 18.42</h1>
          </section>
        </main>
      </section>
    </section>
  );
};

export default RelatedGlimpseKnowledgeCard;
