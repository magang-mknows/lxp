import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const TrainingDetailCard: FC<TCardContentProps> = ({
  title,
  desc,
  addtionalClass,
}): ReactElement => {
  return (
    <section className={`${addtionalClass}  px-10 py-4 rounded-md shadow-sm overflow-hidden`}>
      <h1 className="text-base font-bold mb-1">{title}</h1>
      <p className="text-sm font-normal">{desc}</p>
    </section>
  );
};

export default TrainingDetailCard;
