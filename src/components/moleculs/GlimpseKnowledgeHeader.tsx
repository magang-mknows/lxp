import { FC, ReactElement } from "react";

const GlimpseKnowledgeHeader: FC = (): ReactElement => {
  return (
    <header className="pt-20 w-full gap-2 flex justify-center items-center flex-col">
      <h1 className="font-bold text-3xl text-neutral-800">Sekilas Ilmu</h1>
      <p className="text-sm text-neutral-700">
        Temukan artikel menarik yang bakal menambah wawasanmu disini!
      </p>
    </header>
  );
};

export default GlimpseKnowledgeHeader;
