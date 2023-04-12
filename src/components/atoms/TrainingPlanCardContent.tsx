import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const TrainingPlanCardContent: FC<TCardContentProps> = ({
  title,
  desc,
  subTitle,
}): ReactElement => {
  return (
    <section>
      <header className="w-full flex gap-2 py-4">
        <h1 className="w-fit text-sm flex items-center justify-center px-3 py-1 rounded-md shadow-sm bg-[#E3FBDA] text-[#3EB449]">
          {desc}
        </h1>
        <h1 className="w-fit text-sm flex items-center justify-center px-3 py-1 rounded-md shadow-sm bg-[#FEDBD7] text-[#ED3768]">
          {subTitle}
        </h1>
      </header>
      <main>
        <h1 className="text-[#003A63] text-lg font-bold">{title}</h1>
      </main>
    </section>
  );
};

export default TrainingPlanCardContent;
